"use client";
import React, { useState } from 'react';

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      formData.set('_replyto', formData.get('email'));

      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const providerError = result.errors?.map(({ message }) => message).join(' ');
        throw new Error(providerError || 'Your message could not be sent. Please try again.');
      }

      form.reset();
      setStatus({ type: 'success', message: 'Thanks for reaching out. Your message has been sent.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Your message could not be sent. Please try again.',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form id="contact-form" action="https://formspree.io/f/xbdebyzn" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Portfolio contact form submission" />
      <div className="messages" aria-live="polite" role="status">
        {status.message && (
          <p className={status.type === 'error' ? 'text-danger' : 'text-success'}>
            {status.message}
          </p>
        )}
      </div>
      <div className="controls row">
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <input
              id="form_name"
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              maxLength={120}
              autoComplete="name"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <input
              id="form_email"
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              maxLength={254}
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <textarea
              id="form_message"
              name="message"
              placeholder="Message"
              aria-label="Message"
              rows="4"
              maxLength={5000}
              required
            />
          </div>
          <div className="mt-30 d-flex justify-content-center">
            <button
              type="submit"
              className="cursor-pointer d-flex align-items-center justify-content-center"
              disabled={isSending}
            >
              <span className="text">{isSending ? 'Sending...' : "Let's Talk"}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;

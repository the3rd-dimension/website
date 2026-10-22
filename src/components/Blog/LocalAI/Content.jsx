
import React from 'react';

function Content() {
  return (
    <div className="item pb-60">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text">
            <p>
              AI is becoming part of how I approach software development,
              game development, and digital content creation. Rather than
              relying entirely on cloud services or handing over creative
              decisions to an AI, I am building a local AI-assisted workspace
              around the way I actually work.
            </p>
            <p className="mt-20">
              The goal is not to automate creativity out of the process.
              It is to remove friction from it. As a programmer and Unreal
              Engine developer, I want to spend less time on repetitive
              technical tasks and more time building systems, solving
              problems, and making creative decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-30">
        <div className="col-lg-10">
          <div className="title mt-30">
            <h5 className="fw-600">Why Local AI?</h5>
          </div>
          <div className="text mt-20">
            <p>
              Running models locally gives me more control over my tools
              and allows me to experiment with AI directly on my own
              workstation. With an RTX 5070 Ti and 16 GB of VRAM, I can
              explore local language models, image generation, and certain
              3D workflows. Different tasks require different models,
              and not everything runs equally well on local hardware.
            </p>
          </div>

          <div className="title mt-30">
            <h5 className="fw-600">
              Bringing AI Into Unreal Engine
            </h5>
          </div>
          <div className="text mt-20">
            <p>
              One of my main interests is connecting AI to Unreal Engine
              through tools such as Unreal MCP (Model Context Protocol).
              The idea is to let an assistant interact with supported
              development tools and project data instead of limiting it
              to answering questions in a chat window.
            </p>
            <p className="mt-20">
              Moving a JSON file, converting a float value to an integer
              across relevant locations, inspecting project data, or
              automating repetitive editor operations are examples of
              tasks where AI assistance can save time.
            </p>
            <p className="mt-20">
              I am not telling an AI to build an entire game while I sit
              back and drink coffee. I use it to reduce repetitive work
              so I can focus on gameplay systems, architecture,
              optimization, and creative direction. Changes still need
              to be reviewed and tested.
            </p>
          </div>

          <div className="title mt-30">
            <h5 className="fw-600">
              Image, Video, and 3D Workflows
            </h5>
          </div>
          <div className="text mt-20">
            <p>
              I also experiment with AI-assisted image generation,
              visual editing, video workflows, and 3D reconstruction.
              These tools help me explore concepts, compositions,
              lighting, shapes, and forms before committing to a
              finished result.
            </p>
          </div>

          <div className="unorder-list mt-30 mb-30">
            <h6 className="mb-10">How I Use These Tools</h6>
            <ul className="rest">
              <li>
                Image generation — visual references and concepts
                that I can refine and edit before publication.
              </li>
              <li>
                Video workflows — experimentation and assistance
                with selected production tasks.
              </li>
              <li>
                3D generation — reference geometry for studying,
                tracing, and rebuilding forms in my own modeling workflow.
              </li>
              <li>
                Unreal MCP — assistance with supported editor
                operations and repetitive development tasks.
              </li>
            </ul>
          </div>

          <div className="title mt-30">
            <h5 className="fw-600">
              The Models I Am Experimenting With
            </h5>
          </div>
          <div className="text mt-20">
            <p>
              My setup is an evolving collection of models rather
              than a single AI system. I experiment with different
              models depending on the task, their capabilities,
              memory requirements, and performance.
            </p>
          </div>

          <div className="unorder-list mt-30 mb-30">
            <ul className="rest">
              <li>
                <strong>Qwen Image</strong> — image generation and
                visual concept development.
              </li>
              <li>
                <strong>MiniMax M3 / H3</strong> — language-model
                experimentation for development assistance.
              </li>
              <li>
                <strong>Trellis 2</strong> — image-to-3D generation
                and geometry references.
              </li>
              <li>
                <strong>Llama 3.1</strong> — general-purpose local
                language-model experimentation.
              </li>
              <li>
                <strong>Qwen 14B</strong> — instruction-following
                and coding-related assistance.
              </li>
            </ul>
          </div>

          <div className="title mt-30">
            <h5 className="fw-600">
              The Downsides of Local AI
            </h5>
          </div>
          <div className="text mt-20">
            <p>
              Local AI is not magic. Models can be slow, hardware
              resources are limited, generated content can contain
              errors, and configuring runtimes or integrations takes
              time. Coding assistants can misunderstand a project or
              introduce bugs, while generated images and 3D models
              often need substantial refinement.
            </p>
            <p className="mt-20">
              Giving an assistant access to project files also
              introduces risks. I still need to review changes,
              maintain backups, test results, and decide whether
              automation is actually saving time. Sometimes a
              conventional script or a manual solution is better.
            </p>
          </div>

          <div className="post-qoute mt-50">
            <h6 className="fz-20">
              <span className="l-block">
                AI is another tool in my workspace. The direction,
                decisions, and responsibility remain mine.
              </span>
              <span className="sub-title mt-20 mb-0">
                — Tamzid Idrish
              </span>
            </h6>
          </div>

          <div className="title mt-50">
            <h5 className="fw-600">
              AI-Assisted Does Not Mean AI-Replaced
            </h5>
          </div>
          <div className="text mt-20">
            <p>
              I understand why artists and developers have concerns
              about AI, including creative ownership, training data,
              attribution, and its impact on professional work.
              Those concerns deserve serious discussion.
            </p>
            <p className="mt-20">
              My approach is to use AI as assistance, not as a
              substitute for my skills. Generated visuals are
              references to refine, 3D outputs help me study forms,
              and coding assistants help with technical tasks.
              I remain responsible for the creative decisions,
              implementation, and quality of the final work.
            </p>
          </div>

          <div className="title mt-30">
            <h5 className="fw-600">An Experiment in Progress</h5>
          </div>
          <div className="text mt-20">
            <p>
              This workspace is still evolving. I will continue
              documenting what works, what fails, and what I learn
              while integrating local AI into my Unreal Engine,
              software development, and creative workflows.
            </p>
            <p className="mt-20">
              The goal is simple: spend less time on repetitive
              tasks and more time on the work that requires
              genuine technical understanding and creative judgment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

import {
  SiAmazon,
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRender,
  SiSqlite,
  SiTypescript,
} from 'react-icons/si'
import { Button } from '../components/ui/Button'
import { Tag } from '../components/ui/Tag'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-1 flex-col justify-center pb-12 pt-4 sm:pb-16 sm:pt-8"
    >
      <div className="space-y-4 mb-8 mx-auto text-center">
        <Tag>Founder & Steward of Cloudeln, A01</Tag>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          Hi, I&apos;m Akhil Joseph K J
          <span className="block text-accent">Fullstack Developer, Entrepreneur</span>
          <br></br>
        </h1>
        <p className="max-w-xl mx-auto text-sm text-muted sm:text-base">
          I build end-to-end web applications using modern Python and JavaScript stacks from
          backend APIs to responsive React frontends with a focus on clean code and practical
          problem solving.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:p-8 card-glow">
        {/* Grid-paper background overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:32px_32px]"
        />

        <div className="relative">
          <div className="flex flex-col gap-4 text-xs text-muted">
            <br></br>
            <br></br>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-100 text-center">
              Core Stack
            </span>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* Languages */}
              <div className="rounded-xl p-3">
                <p className="mb-2 text-[11px] font-medium text-slate-200">Languages</p>
                <div className="flex flex-wrap gap-3">
                  {/* Python */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiPython className="h-5 w-5 text-[#f7df1e]" />
                    </div>
                    <span className="text-[11px] text-slate-200">Python</span>
                  </div>

                  {/* JavaScript */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiJavascript className="h-5 w-5 text-[#f7df1e]" />
                    </div>
                    <span className="text-[11px] text-slate-200">JavaScript</span>
                  </div>

                  {/* TypeScript */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiTypescript className="h-5 w-5 text-[#3178c6]" />
                    </div>
                    <span className="text-[11px] text-slate-200">TypeScript</span>
                  </div>

                  {/* HTML */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiHtml5 className="h-5 w-5 text-[#e34f26]" />
                    </div>
                    <span className="text-[11px] text-slate-200">HTML</span>
                  </div>

                  {/* CSS */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiCss3 className="h-5 w-5 text-[#1572b6]" />
                    </div>
                    <span className="text-[11px] text-slate-200">CSS</span>
                  </div>
                </div>
              </div>

              {/* Libraries & Frameworks */}
              <div className="rounded-xl p-3">
                <p className="mb-2 text-[11px] font-medium text-slate-200">Libraries &amp; Frameworks</p>
                <div className="flex flex-wrap gap-3">
                  {/* Django */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiDjango className="h-5 w-5 text-[#2ba977]" />
                    </div>
                    <span className="text-[11px] text-slate-200">Django</span>
                  </div>

                  {/* FastAPI */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiFastapi className="h-5 w-5 text-[#05998b]" />
                    </div>
                    <span className="text-[11px] text-slate-200">FastAPI</span>
                  </div>

                  {/* React */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiReact className="h-5 w-5 text-[#61dafb]" />
                    </div>
                    <span className="text-[11px] text-slate-200">React</span>
                  </div>

                  {/* Node.js (runtime / ecosystem) */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiNodedotjs className="h-5 w-5 text-[#539e43]" />
                    </div>
                    <span className="text-[11px] text-slate-200">Node.js</span>
                  </div>

                  {/* Bootstrap */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiBootstrap className="h-5 w-5 text-[#7952b3]" />
                    </div>
                    <span className="text-[11px] text-slate-200">Bootstrap</span>
                  </div>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="rounded-xl p-3">
                <p className="mb-2 text-[11px] font-medium text-slate-200">Tools &amp; Platforms</p>
                <div className="flex flex-wrap gap-3">
                  {/* Git */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiGit className="h-5 w-5 text-[#f05032]" />
                    </div>
                    <span className="text-[11px] text-slate-200">Git</span>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiGithub className="h-5 w-5 text-slate-100" />
                    </div>
                    <span className="text-[11px] text-slate-200">GitHub</span>
                  </div>

                  {/* AWS */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiAmazon className="h-5 w-5 text-[#ff9900]" />
                    </div>
                    <span className="text-[11px] text-slate-200">AWS</span>
                  </div>

                  {/* Render */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiRender className="h-5 w-5 text-[#46e3b7]" />
                    </div>
                    <span className="text-[11px] text-slate-200">Render</span>
                  </div>

                  {/* Firebase */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiFirebase className="h-5 w-5 text-[#ffca28]" />
                    </div>
                    <span className="text-[11px] text-slate-200">Firebase</span>
                  </div>

                  {/* Postman / REST APIs */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiPostman className="h-5 w-5 text-[#ff6c37]" />
                    </div>
                    <span className="text-[11px] text-slate-200">REST APIs &amp; Postman</span>
                  </div>
                </div>
              </div>

              {/* Databases & Concepts */}
              <div className="rounded-xl p-3">
                <p className="mb-2 text-[11px] font-medium text-slate-200">Databases &amp; Concepts</p>

                <div className="mb-2 flex flex-wrap justify-center gap-3 sm:justify-start">
                  {/* MySQL */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiMysql className="h-5 w-5 text-[#4479a1]" />
                    </div>
                    <span className="text-[11px] text-slate-200">MySQL</span>
                  </div>

                  {/* SQLite */}
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
                      <SiSqlite className="h-5 w-5 text-[#003b57]" />
                    </div>
                    <span className="text-[11px] text-slate-200">SQLite</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                  <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
                    MVC Architecture
                  </span>
                  <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
                    SOLID Principles
                  </span>
                  <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
                    Agile Methodologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button
            onClick={() => {
              const el = document.getElementById('projects')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            View selected work
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            Contact me
          </Button>
        </div>
      </div>
    </section>
  )
}

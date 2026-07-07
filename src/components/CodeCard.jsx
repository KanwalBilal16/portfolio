export default function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-top">
        <span className="dot r" /><span className="dot y" /><span className="dot g" />
        <span className="code-file">developer.ts</span>
      </div>
      <div className="code-body">
        <div><span className="ln">1</span><span className="k">const</span> <span className="p">dev</span> <span className="c">=</span> <span className="p">{'{'}</span></div>
        <div><span className="ln">2</span>&nbsp;&nbsp;<span className="p">name</span><span className="c">:</span> <span className="s">"Kanwal Bilal"</span><span className="c">,</span></div>
        <div><span className="ln">3</span>&nbsp;&nbsp;<span className="p">role</span><span className="c">:</span> <span className="s">"Full Stack Developer"</span><span className="c">,</span></div>
        <div><span className="ln">4</span>&nbsp;&nbsp;<span className="p">experience</span><span className="c">:</span> <span className="s">"4 years"</span><span className="c">,</span></div>
        <div><span className="ln">5</span>&nbsp;&nbsp;<span className="p">stack</span><span className="c">:</span> <span className="p">[</span><span className="s">"React"</span><span className="c">,</span> <span className="s">"Next.js"</span><span className="c">,</span></div>
        <div><span className="ln">6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="s">"Laravel"</span><span className="c">,</span> <span className="s">"Node.js"</span><span className="p">]</span><span className="c">,</span></div>
        <div><span className="ln">7</span>&nbsp;&nbsp;<span className="p">location</span><span className="c">:</span> <span className="s">"Faisalabad, PK"</span><span className="c">,</span></div>
        <div><span className="ln">8</span>&nbsp;&nbsp;<span className="p">available</span><span className="c">:</span> <span className="k">true</span><span className="cursor" /></div>
        <div><span className="ln">9</span><span className="p">{'}'}</span></div>
      </div>
    </div>
  )
}

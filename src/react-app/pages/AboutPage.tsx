import React from "react";
import { PageLayout } from "../components/PageLayout";

export function AboutPage() {
  return (
    <PageLayout title="About Us" ariaLabel="Up Shit Creek Guide Service">
      <section className="band band-forest" role="region" aria-label="Site information">
        <div className="about-hero-inner container">
          <h1 className="about-title" style={{ marginTop: "-5px" }}>About Us</h1>
        </div>
        <div className="container" style={{ marginTop: "-25px" }}>
          <h2>What is this site?</h2>
          <p>
            This is an insider-only guide for the Up Shit Creek Guide Service. Translation:
            it's not a real booking website—it's our private playground to try ideas, tell tall tales,
            and workshop the kind of menu items your doctor and game warden would both frown at.
            Expect moose, maps, and merriment—not merchandise.
          </p>
          <p className="muted" style={{ marginTop: 10 }}>
            For internal use only. Please don't share publicly. If you stumbled in from the big internet,
            pretend you saw a moose and back away slowly.
          </p>
        </div>
      </section>

      <div className="seam seam-forestline" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0 90 C 120 70 180 90 260 70 C 340 50 420 100 520 80 C 640 55 720 100 840 78 C 920 65 1020 95 1120 72 C 1220 50 1320 88 1440 70 L1440 120 L0 120 Z" /></svg>
      </div>

      <section className="band band-camp" role="region" aria-label="The people involved">
        <div className="container">
          <h2>Who's behind this outfit?</h2>
          <p className="muted" style={{ marginTop: 4, marginBottom: 50 }}>Meet the crew. Equal parts competent and ridiculous.</p>
          <div className="grid-two">
            <div className="card">
              <img src="/jw-min.jpg" alt="Jw" style={{ width: "100%", borderRadius: 12 }} />
              <h2>Jw</h2>
              <p className="muted">JW grew up where dirt roads end and rumors begin. He tracks by scent, cooks by instinct, and can rebuild an outboard from parts he hasn't found yet. Folks say he laughs like a chainsaw starting on the second pull, and a crow once taught him knot‑tying. We didn't believe it either—until the crow asked for a raise.</p>
            </div>
            <div className="card">
              <img src="/eli-min.jpg" alt="Eli" style={{ width: "100%", borderRadius: 12 }} />
              <h2>Eli</h2>
              <p className="muted">Raised on a diet of spruce tips and questionable advice, Eli once navigated a fog bank by listening for loons in D minor. He's our map‑whisperer, amateur meteorologist, and the only person we trust to brew coffee strong enough to double as boat epoxy. On off days he practices moose diplomacy and writes sternly worded letters to rain clouds.</p>
            </div>
            <div className="card">
              <img src="/mort-min.jpg" alt="Mort" style={{ width: "100%", borderRadius: 12 }} />
              <h2>Mort</h2>
              <p className="muted">Mort once tracked a bull by the way it sighed at blackflies. He ties a bowline one‑handed (the other is for Red Bull), calibrates compasses by staring north until they behave, and tunes chainsaws by ear. Claims he can smell rain under snow. We stopped betting against him.</p>
            </div>
            <div className="card">
              <img src="/camden-min.jpg" alt="Camden" style={{ width: "100%", borderRadius: 12 }} />
              <h2>Camden</h2>
              <p className="muted">Camden keeps the maps laminated and the jokes dry. He measures distance in paddles and snack breaks, and fixes everything—tarps, radios, morale. Once negotiated a truce between a bait bucket and a raccoon. The raccoon left with stock options.</p>
            </div>
            <div className="card">
              <img src="/braelan-min.jpg" alt="Braelan" style={{ width: "100%", borderRadius: 12 }} />
              <h2>Braelan</h2>
              <p className="muted">Braelan keeps the rigs humming and the eyes in the sky. Part mechanic, part aerial spotter—he'll tune the outboard and call a moose from 800 feet in the same breath. He reads wind over water like a tachometer, chases rattles to the right bolt by sound alone, and marks animals from the air long before we can find a track. If something squeaks, he oils it; if something moves, he calls it first.</p>
            </div>
            <div className="card">
              <img src="/colby-min.jpg" alt="Colby" style={{ width: "100%", borderRadius: 12 }} />
              <h2>Colby</h2>
              <p className="muted">Hank Hill's arch enemy.</p>
            </div>
            <div className="card">
              <img src="/ally-min.jpg" alt="Ally" style={{ width: "100%", borderRadius: 12 }} />
              <h2>Ally</h2>
              <p className="muted">Our photographer and resident grouse spotter. Ally frames the trip like a magazine spread, hears drumming before anyone else, and somehow gets the bird and the grin in the same shot.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

import React, { useMemo } from "react";
import { PageLayout } from "../components/PageLayout";

export function PoemPage() {
  const poem = useMemo(() => `To shoot a Moose in the Rain

I would shoot a moose in the rain 

I would shoot a moose in the brain 
I would shoot him where the water drains
Standing next to his friend the crane
If only I could shoot him over grain

I would shoot a moose in the rain 

We have walked where moose have lain
And days ahead were seen by plane
Others play not by the rules of the game
Our locations and methods may seem arcane
But from illegal activities we will abstain
For to shoot a moose at night is quite insane
And from taking those without antlers we will refrain

I would shoot a moose in the rain

With careless step an ankle may sprain
But with snacks a-plenty our spirts we maintain
Is that a banana? No, a plantain
With which leg cramps we'll restrain

I would shoot a moose in the rain 

His wandering path only he my dain
From the woods we attempt to coax with nasally refrain
But on this breeze he would smell us plain
With an angry charge he may seek to maim 
And without care he would hit like a train

I would shoot a moose in the rain

Through my scope I see him plain 
I set my cross hairs just under his mane 
With well placed shot he will feel little pain
But to miss would be a great shame

I would shoot a moose in the rain

A Dratharr will track not a Great Dane
The waters red his blood will stain
If he falls in the muck we will need to strain
And if he gets too stuck we may need a crane

I would shoot a moose in the rain

At the tagging station he'll wish for Novocain
Freezers full of meat we will gain
Through many winters they will sustain
When we cook him over propane
Which to watching women we will man-splain 

That we shot a moose in the rain

Once hoarded under kings riegn 
Now moose belong to all of Maine
After the hunt we will toast with champagne
To the sultry sounds of John Coltrane
Our joy we can hardly contain

Because 

We shot a moose in the rain



by Eli Carmer and Jw Harriman`, []);
  
  const stanzas = useMemo(() => poem.split(/\n\s*\n/), [poem]);
  
  return (
    <PageLayout title="Poem" ariaLabel="Poem">
      <section className="band band-forest" role="region" aria-label="Poem">
        <div className="about-hero-inner container">
          <h1 className="about-title">Poem</h1>
        </div>
        <div className="container" style={{ marginTop: "-25px" }}>
          <div className="poem">
            {stanzas.map((stanza, idx) => (
              <div key={idx} className="stanza">
                {stanza}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

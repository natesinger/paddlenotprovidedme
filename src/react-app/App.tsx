// src/App.tsx
import { useEffect, useMemo, useState, type ReactNode } from "react";
import "./App.css";

type RoutePath = "/" | "/about" | "/poem" | "/menu";

function useRouter() {
  const [path, setPath] = useState<RoutePath>(() => (location.pathname as RoutePath));

  useEffect(() => {
    const onPop = () => setPath(location.pathname as RoutePath);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to: RoutePath, replace?: boolean) => {
    if (replace) {
      history.replaceState({}, "", to);
    } else {
      history.pushState({}, "", to);
    }
    setPath(to);
  };

  return { path, navigate } as const;
}

function Nav({ current, onNavigate }: { current: RoutePath; onNavigate: (to: RoutePath) => void }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={() => onNavigate("/about")} role="button" aria-label="Go to About" tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") onNavigate("/about"); }}>
          <img src="/uscgs.png" alt="USCGS icon" className="brand-badge" />
          <span>Up Shit Creek Guide Service</span>
        </div>
        <div className="nav-links">
          <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate("/about"); }} className={current === "/about" ? "active" : ""}>About</a>
          <a href="/poem" onClick={(e) => { e.preventDefault(); onNavigate("/poem"); }} className={current === "/poem" ? "active" : ""}>Poem</a>
          <a href="/menu" onClick={(e) => { e.preventDefault(); onNavigate("/menu"); }} className={current === "/menu" ? "active" : ""}>Menu</a>
        </div>
      </div>
    </nav>
  );
}

function AboutPage() {
  return (
    <main className="container">
      <h1>About Us</h1>
      <div className="grid-two">
        <div className="card">
          <img src="/eli.png" alt="Eli Carmer" style={{ width: "100%", borderRadius: 12 }} />
          <h2>Eli Carmer</h2>
          <p className="muted">Raised on a diet of spruce tips and questionable advice, Eli once navigated a fog bank by listening for loons in D minor. He’s our map‑whisperer, amateur meteorologist, and the only person we trust to brew coffee strong enough to double as boat epoxy. On off days he practices moose diplomacy and writes sternly worded letters to rain clouds.</p>
        </div>
        <div className="card">
          <img src="/jw.png" alt="JW Harriman" style={{ width: "100%", borderRadius: 12 }} />
          <h2>JW Harriman</h2>
          <p className="muted">JW grew up where dirt roads end and rumors begin. He tracks by scent, cooks by instinct, and can rebuild an outboard from parts he hasn’t found yet. Folks say he laughs like a chainsaw starting on the second pull, and a crow once taught him knot‑tying. We didn’t believe it either—until the crow asked for a raise.</p>
        </div>
      </div>
    </main>
  );
}

function PoemPage() {
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
With which leg cramps we’ll restrain

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

At the tagging station he’ll wish for Novocain
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
    <main className="container">
      <h1>Poem</h1>
      <div className="poem card">
        {stanzas.map((stanza, idx) => (
          <div
            key={idx}
            className="stanza"
            style={{ animationDelay: `${idx * 0.08 + 0.05}s` }}
          >
            {stanza}
          </div>
        ))}
      </div>
    </main>
  );
}

function MenuPage() {
  return (
    <main className="container">
      <h1>Menu</h1>
      <section className="card">
        <h2>Available Breakfasts</h2>
        <ul>
          <li><strong>Coffee</strong>: served black</li>
          <li><strong>Chicken fried muskrat and waffles</strong>: Tenderized muskrat dipped in beech flower and fried in loon oil served with marsh oat waffles and grey birch syrup.</li>
          <li><strong>House Sausage and crow eggs</strong>: featuring USCGS’s legendary spicy possum garlic sausage.</li>
          <li><strong>UP SHIT CREEK PARFAIT</strong>: Moose yogurt base with beaked hazel and pine nuts, raspberries, cranberry, and choke cherry top.</li>
          <li><strong>The Smooth Smelt</strong>: Our quick out the door energy smoothie! Get your wild up, with our blend of bog cranberry’s, skunk cabbage, choke cherries, cattail root fiber, and smelts purée protein shot. Garnisheed with pond scum and perch eyes.</li>
          <li><strong>Night after the Snack</strong>: House Omelette, constructed with Shag eggs, …. Optional, merganser, ivy pesto.</li>
          <li><strong>The Frenchman’s Frenzy</strong>: Battered French toast, constructed using hazel nut bread coated with beaten Loon eggs and beaver milk. <em>*add (USCGS’s legendary spicy possum garlic sausage)</em></li>
        </ul>
      </section>
      <section className="card">
        <h2>Lunch</h2>
        <ul>
          <li><strong>Poached Timberdoodle sandwiches</strong>: Poached woodcock served in between 1999 white bread with bittersweet - creek chub aioli</li>
          <li><strong>Red squirrel teriyaki on a stick</strong>: you pick between balsam poplar, white spruce, or pin cherry skewers</li>
          <li><strong>Mink dogs</strong>: 100% Ground mink in a 1998 white sub roll with Indian cucumber relish</li>
          <li><strong>The Prickly Hog</strong>: Pulled Quill-pig shoulders served on your choice of bread, with moose rumen coleslaw</li>
          <li><strong>The forbidden duck</strong>: Shredded loon tacos served in acorn tortillas topped with grouse crop salsa</li>
        </ul>
      </section>
      <section className="card">
        <h2>Appetizers</h2>
        <ul>
          <li><strong>Smoked lodge dip</strong>: Smoked Buffalo beaver tail dip with birch cambium chips</li>
          <li><strong>Montreal whores ovaries</strong>: Fall fish roe slated served on spruce bark flakes</li>
          <li><strong>Quill pigs in a blanket</strong>: Porcupine nuggets, rolled in beech nut flower and deep fried in coot oil.</li>
        </ul>
      </section>
      <section className="card">
        <h2>The Happy Hour</h2>
        <ul>
          <li><strong>The Blue-Berry Bear</strong>: Blue berry mash from the paunch of our fall bear hunt, mixed with ice and Orloff vodka served with a blue spruce twig.</li>
        </ul>
      </section>
      <section className="card">
        <h2>From the Bar</h2>
        <ul>
          <li><strong>The Bleached Beaver</strong>: A White Russian, made Svedka vodka, beaver caster infused Kahului and whipped with a sunk cream finish.</li>
          <li><strong>Sharp Spruce Ale</strong>: Our home brewed tangy summer ale aged with marsh sedge hops, white spruce new growth and leadbetter ponds best waters</li>
          <li><strong>The Pleasant Stream Ol’ Fashion</strong>: Made with our house Pleasant Stream Scotch: A nine month scotch using water from pleasant stream aged in Hemlock barrels and triply peated from the inlet of fifth Masqucook. Served with birch syrup and tarsal gland bitters and a choke cherry</li>
          <li><strong>USCGS Iced Boba Tea</strong>: House Tea Blend (wintergreen, pin cherry, balsam Poplar, soap wart) served iced, with bullfrog egg Boba.</li>
          <li><strong>Chaga martini</strong>: ground chaga percolated to perfection, shot of sage grass vodka, topped with whipped maple syrup, dusted with cinnamon</li>
        </ul>
      </section>
      <section className="card">
        <h2>Dinners</h2>
        <ul>
          <li><strong>The starving Lumberjack</strong>: Charred spruce partridge, served with a side of Indian potatoes and boiled fir cambium.</li>
          <li><strong>Piscadiqis vener shittsille</strong>: Moose calf back-strap tenderizer by the finest northern Maine International log truck. Breaded in cattail dust and CAMP* GRIT seasoning deep fried in a hydraulic and beaver caster oil blend.</li>
          <li><strong>Brownville Date Night</strong>: An authentic Italian dinner of Parmesan coyote served over ramen noodles with a cranberry based red sauce.</li>
          <li><strong>North Maine Woods Turducken</strong>: A Wilson’s snipe encased inside a plucked hooded merganser stuffed in a well seasoned blue heron wrapped in hemlock bows and flashed boiled. Served <em>*Blue to Medium Rare</em></li>
          <li><strong>The Forbidden Foursom</strong>: A Piping Plover stuffed inside a Spruce Grouse, stuffed in a Cormorant, stuffed inside a Loon, fried in smelt oil and then gently toasted over a balsam fir campfire</li>
          <li><strong>The Allagash football</strong>: a raccoon served haggis style with a caribou moss salad</li>
          <li><strong>UP SHIT CREEK Boiled Dinner</strong>: Boiled barred owl, with ramps, cat-tail root and radishes</li>
        </ul>
      </section>
      <section className="card">
        <h2>Dessert</h2>
        <ul>
          <li><strong>Allagash cream pie</strong>: raccoon shaped potato cakes with a choke cherry custard filling</li>
          <li><strong>Winterberry</strong></li>
          <li><strong>Statute 16 Pie</strong>: Our lemon pie, featuring sumac berry’s as our important lemon substitute. With a raccoon lard sawdust crust, topped with a eagle egg meringue.</li>
        </ul>
        <p className="muted">Please ask our server if you wish to add: Bear grease, cedar bark, wood sorrel, pine seeds, or general CAMP* GRIT To any meal.</p>
      </section>
    </main>
  );
}

function App() {
  const { path, navigate } = useRouter();

  // Redirect / -> /about once on mount if needed
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/about", true);
    }
  }, []);

  let page: ReactNode;
  if (path === "/poem") page = <PoemPage />;
  else if (path === "/menu") page = <MenuPage />;
  else page = <AboutPage />;

  return (
    <>
      <Nav current={path === "/" ? "/about" : path} onNavigate={navigate} />
      {page}
    </>
  );
}

export default App;

import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Seam } from "../components/Seam";

export function MenuPage() {
  return (
    <PageLayout title="Menu" ariaLabel="Menu">
      <section className="band band-forest" role="region" aria-label="Breakfasts">
        <div className="container">
          <h1 className="page-title">Menu</h1>
          <p className="muted" style={{ textAlign: "center" }}>
            Ask your server to add: bear grease, cedar bark, wood sorrel, pine seeds, or general CAMP GRIT To any meal.
          </p>
          <h2 className="section-header">Breakfasts</h2>
          <ul>
            <li><strong>Coffee</strong>: served black</li>
            <li><strong>Chicken fried muskrat and waffles</strong>: Tenderized muskrat dipped in beech flower and fried in loon oil served with marsh oat waffles and grey birch syrup.</li>
            <li><strong>House Sausage and crow eggs</strong>: featuring USCGS's legendary spicy possum garlic sausage.</li>
            <li><strong>UP SHIT CREEK PARFAIT</strong>: Moose yogurt base with beaked hazel and pine nuts, raspberries, cranberry, and choke cherry top.</li>
            <li><strong>The Smooth Smelt</strong>: Our quick out the door energy smoothie! Get your wild up, with our blend of bog cranberry's, skunk cabbage, choke cherries, cattail root fiber, and smelts purée protein shot. Garnisheed with pond scum and perch eyes.</li>
            <li><strong>Night after the Snack</strong>: House Omelette, constructed with Shag eggs, …. Optional, merganser, ivy pesto.</li>
            <li><strong>The Frenchman's Frenzy</strong>: Battered French toast, constructed using hazel nut bread coated with beaten Loon eggs and beaver milk. <em>*add (USCGS's legendary spicy possum garlic sausage)</em></li>
          </ul>
        </div>
      </section>

      <Seam type="forestline" variant={0} />

      <section className="band band-camp" role="region" aria-label="Lunch">
        <div className="container">
          <h2 className="section-header">Lunch</h2>
          <ul>
            <li><strong>Poached Timberdoodle sandwiches</strong>: Poached woodcock served in between 1999 white bread with bittersweet - creek chub aioli</li>
            <li><strong>Red squirrel teriyaki on a stick</strong>: you pick between balsam poplar, white spruce, or pin cherry skewers</li>
            <li><strong>Mink dogs</strong>: 100% Ground mink in a 1998 white sub roll with Indian cucumber relish</li>
            <li><strong>The Prickly Hog</strong>: Pulled Quill-pig shoulders served on your choice of bread, with moose rumen coleslaw</li>
            <li><strong>The forbidden duck</strong>: Shredded loon tacos served in acorn tortillas topped with grouse crop salsa</li>
          </ul>
        </div>
      </section>

      <Seam type="treeline" variant={1} />

      <section className="band band-forest" role="region" aria-label="Appetizers">
        <div className="container">
          <h2 className="section-header">Appetizers</h2>
          <ul>
            <li><strong>Smoked lodge dip</strong>: Smoked Buffalo beaver tail dip with birch cambium chips</li>
            <li><strong>Montreal whores ovaries</strong>: Fall fish roe slated served on spruce bark flakes</li>
            <li><strong>Quill pigs in a blanket</strong>: Porcupine nuggets, rolled in beech nut flower and deep fried in coot oil.</li>
          </ul>
        </div>
      </section>

      <Seam type="forestline" variant={2} />

      <section className="band band-camp" role="region" aria-label="Happy Hour">
        <div className="container">
          <h2 className="section-header">The Happy Hour</h2>
          <ul>
            <li><strong>The Blue-Berry Bear</strong>: Blue berry mash from the paunch of our fall bear hunt, mixed with ice and Orloff vodka served with a blue spruce twig.</li>
          </ul>
        </div>
      </section>

      <Seam type="treeline" variant={3} />

      <section className="band band-forest" role="region" aria-label="From the Bar">
        <div className="container">
          <h2 className="section-header">From the Bar</h2>
          <ul>
            <li><strong>The Bleached Beaver</strong>: A White Russian, made Svedka vodka, beaver caster infused Kahului and whipped with a sunk cream finish.</li>
            <li><strong>Sharp Spruce Ale</strong>: Our home brewed tangy summer ale aged with marsh sedge hops, white spruce new growth and leadbetter ponds best waters</li>
            <li><strong>The Pleasant Stream Ol' Fashion</strong>: Made with our house Pleasant Stream Scotch: A nine month scotch using water from pleasant stream aged in Hemlock barrels and triply peated from the inlet of fifth Masqucook. Served with birch syrup and tarsal gland bitters and a choke cherry</li>
            <li><strong>USCGS Iced Bobba Tea</strong>: House Tea Blend (wintergreen, pin cherry, balsam Poplar, soap wart) served iced, with bullfrog egg Boba.</li>
            <li><strong>Chaga martini</strong>: ground chaga percolated to perfection, shot of sage grass vodka, topped with whipped maple syrup, dusted with cinnamon</li>
          </ul>
        </div>
      </section>

      <Seam type="forestline" variant={4} />

      <section className="band band-camp" role="region" aria-label="Dinners">
        <div className="container">
          <h2 className="section-header">Dinners</h2>
          <ul>
            <li><strong>The starving Lumberjack</strong>: Charred spruce partridge, served with a side of Indian potatoes and boiled fir cambium.</li>
            <li><strong>Piscadiqis vener shittsille</strong>: Moose calf back-strap tenderizer by the finest northern Maine International log truck. Breaded in cattail dust and CAMP* GRIT seasoning deep fried in a hydraulic and beaver caster oil blend.</li>
            <li><strong>Brownville Date Night</strong>: An authentic Italian dinner of Parmesan coyote served over ramen noodles with a cranberry based red sauce.</li>
            <li><strong>North Maine Woods Turducken</strong>: A Wilson's snipe encased inside a plucked hooded merganser stuffed in a well seasoned blue heron wrapped in hemlock bows and flashed boiled. Served <em>*Blue to Medium Rare</em></li>
            <li><strong>The Forbidden Foursom</strong>: A Piping Plover stuffed inside a Spruce Grouse, stuffed in a Cormorant, stuffed inside a Loon, fried in smelt oil and then gently toasted over a balsam fir campfire</li>
            <li><strong>The Allagash football</strong>: a raccoon served haggis style with a caribou moss salad</li>
            <li><strong>UP SHIT CREEK Boiled Dinner</strong>: Boiled barred owl, with ramps, cat-tail root and radishes</li>
          </ul>
        </div>
      </section>

      <Seam type="treeline" variant={0} />

      <section className="band band-forest" role="region" aria-label="Desserts">
        <div className="container">
          <h2 className="section-header">Dessert</h2>
          <ul>
            <li><strong>Allagash cream pie</strong>: raccoon shaped potato cakes with a choke cherry custard filling</li>
            <li><strong>Winterberry</strong></li>
            <li><strong>Statute 16 Pie</strong>: Our lemon pie, featuring sumac berry's as our important lemon substitute. With a raccoon lard sawdust crust, topped with a eagle egg meringue.</li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}

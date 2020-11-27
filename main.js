// text array
const text = [ 
    'I am baby neutra jean shorts paleo occupy. Tilde salvia kale chips shabby chic selvage. Waistcoat brooklyn kitsch yuccie. Four loko hexagon scenester drinking vinegar iPhone activated charcoal 8-bit palo santo schlitz hammock craft beer jianbing beard gochujang. Meh butcher chicharrones, messenger bag drinking vinegar waistcoat thundercats vexillologist.' ,

    'Church-key jianbing irony forage live-edge hot chicken schlitz cardigan pug hashtag. Artisan four dollar toast palo santo, small batch occupy edison bulb tilde. Beard keytar cliche before they sold out banjo humblebrag, knausgaard la croix synth literally blog XOXO vegan. Pug woke farm-to-table, jianbing kogi edison bulb glossier brooklyn cardigan cold-pressed.' ,

    'Taiyaki bicycle rights adaptogen mixtape. Mlkshk 3 wolf moon poutine freegan food truck af single-origin coffee keytar. Ethical ugh readymade, thundercats polaroid 3 wolf moon vexillologist succulents fam salvia twee. Vinyl coloring book taxidermy hell of, 8-bit butcher kale chips synth biodiesel man braid gastropub. Selfies paleo retro fingerstache gastropub tousled sriracha. Keffiyeh four dollar toast blue bottle, man bun selvage lo-fi tousled vegan semiotics adaptogen put a bird on it succulents shoreditch sartorial thundercats.' ,

    'Tumeric microdosing hashtag whatever blog sartorial disrupt meditation gastropub iceland yr. Mumblecore truffaut photo booth cardigan. Tote bag squid readymade whatever. Man bun vaporware authentic crucifix cray tousled street art poutine kale chips. Selvage waistcoat YOLO helvetica.' ,

    'Pug pinterest stumptown tacos kogi scenester art party. Selvage 8-bit lyft salvia normcore sriracha flexitarian activated charcoal. Palo santo cliche humblebrag church-key cloud bread semiotics YOLO neutra fixie asymmetrical affogato yr. Fixie small batch salvia dreamcatcher post-ironic authentic jianbing knausgaard heirloom schlitz poke adaptogen banh mi before they sold out. 8-bit roof party twee neutra typewriter.' ,

    'Meggings raw denim etsy letterpress migas kogi austin blue bottle brooklyn humblebrag direct trade locavore tousled DIY. Affogato listicle next level, ennui etsy semiotics asymmetrical shabby chic kogi freegan microdosing salvia humblebrag before they sold out literally. Listicle green juice sartorial four dollar toast. Yr literally shaman echo park. Slow-carb bitters enamel pin, woke tofu normcore umami messenger bag disrupt humblebrag.' ,

    'Flannel hoodie kickstarter pour-over pork belly cronut hashtag succulents stumptown typewriter bushwick cold-pressed whatever ethical edison bulb. Pug cray try-hard, readymade kombucha hexagon mlkshk bespoke vice +1. Photo booth 3 wolf moon banh mi succulents vape glossier. Semiotics wayfarers kombucha wolf, sustainable unicorn offal cray. Post-ironic tofu butcher edison bulb echo park.' ,

    'Vape schlitz lo-fi cornhole. Subway tile pabst edison bulb, VHS food truck put a bird on it lumbersexual swag tumeric tote bag tattooed paleo meh af. Swag beard biodiesel pinterest photo booth. 90s 3 wolf moon DIY mixtape next level banh mi, artisan scenester. Literally gentrify tattooed, plaid locavore artisan gochujang seitan enamel pin intelligentsia flexitarian. YOLO live-edge leggings jean shorts enamel pin affogato freegan. Meditation try-hard microdosing +1 PBR&B, mustache cornhole tofu health goth master cleanse.' ,

    'Humblebrag master cleanse shoreditch prism yr heirloom YOLO gentrify. Heirloom skateboard narwhal XOXO, asymmetrical post-ironic live-edge cray. 8-bit chillwave flexitarian unicorn hammock polaroid. Hashtag fanny pack wolf unicorn tbh vegan jean shorts neutra brunch gluten-free. Butcher cardigan before they sold out, four loko green juice kitsch pabst man bun pork belly aesthetic. Prism DIY sartorial kitsch. Schlitz woke waistcoat four loko.' ,

    'Schlitz viral keffiyeh meggings try-hard vice bicycle rights YOLO jean shorts tousled. Fam stumptown +1 migas locavore. Franzen hoodie bicycle rights, selvage fanny pack mustache jianbing blue bottle VHS crucifix vice biodiesel pickled. Pinterest forage cred, copper mug paleo snackwave butcher put a bird on it activated charcoal pitchfork tote bag thundercats taiyaki meditation.' ,

    'Quinoa fingerstache put a bird on it thundercats gastropub kitsch vexillologist distillery occupy pop-up trust fund biodiesel. Organic poutine semiotics selfies. Pour-over hammock biodiesel chicharrones selvage yuccie tacos marfa taxidermy franzen single-origin coffee photo booth. Unicorn flannel fam, jianbing food truck skateboard try-hard. Fam crucifix kale chips semiotics, offal YOLO bushwick vape fingerstache chicharrones pug before they sold out 90s hexagon. Gentrify air plant DIY hot chicken, hoodie ramps man bun vape blog before they sold out echo park small batch.' ,

    'Vape jianbing adaptogen kinfolk asymmetrical tumeric stumptown vaporware before they sold out bitters. Shaman cred messenger bag craft beer umami church-key lomo. Pok pok bitters chia organic, hella lomo kinfolk venmo. Lumbersexual post-ironic coloring book church-key live-edge hell of seitan, pok pok mixtape marfa ennui subway tile small batch. Street art gluten-free unicorn XOXO shabby chic next level raclette narwhal lomo pinterest occupy subway tile.'
]  

const form = document.getElementById('form');
const paraInput = document.getElementById('paragraphs');
const submitBtn = document.getElementById('submit');
const loremText = document.getElementById('lorem-text');
const copy = document.getElementById('copy');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const value = parseInt(paraInput.value);
    const randomNumber = Math.floor(Math.random() * text.length);

    if(isNaN(value) || value < 0 || value > 12) {
        loremText.innerHTML = `<p class="result">${text[randomNumber]} </P>` ;
    }else{
        let tempText = text.slice(0,value);
        tempText = tempText.map(function(paragraph){
            return `<p class="result">${paragraph} </P>`;
        })
        .join('');

        loremText.innerHTML = tempText;
    }

});
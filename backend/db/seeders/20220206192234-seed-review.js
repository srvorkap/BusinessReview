"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Reviews",
            [
                // first business
                {
                    rating: 5,
                    content: `We started with the pancetta arancini which were super tasty. My step mom got the salmon poke bowl which she said was delicious. My dad got the roasted beet and quinoa salad and really enjoyed it. My sister and I then shared a make your own pizza with caramelized onions and pesto. It took us forever to decide on a pizza because the toppings offered were kind of strange, however I'm very happy with what we ended up getting was so so good. My only thing is it was a bit pricey, especially for lunch.`,
                    userId: 3,
                    businessId: 1,
                },
                {
                    rating: 4,
                    content: `Very solid pizza restaurant.
                    We built our own and it was great. Good wings also.
                    Our server Maxwell did a great job.`,
                    userId: 4,
                    businessId: 1,
                },
                {
                    rating: 1,
                    content: `We stopped in for lunch while visiting from out  of town and sat outside due to having a puppy with us. Unfortunately, it started to rain. The waitress said she would get her manger to open up one of the big umbrellas for us. He was less than thrilled to help plus had no personality or empathy. He looked annoyed that he had to come outside and told us if the wind picked up he would have to close it. With how many restaurants had to close during the pandemic and how many are in the area, I would have expected him to be more accommodating.

                    As far as the food, it was average. Nothing extraordinary to make me feel compelled to rush back again on the next trip. The pizza that was ordered was uncooked and the chicken in the salad I got was over cooked. The only positive was our server, she was very friendly and attentive.`,
                    userId: 5,
                    businessId: 1,
                },
                {
                    rating: 3,
                    content: `Nice location. Nice hostess
                    My husband liked his hamburger and loved the fries. I did not. The difference was that my fried fish was served on mine. It made them extra greasy and not at all crisp.
                    The batter on the fish was thick and greasy. it peeled off easily and the fish was just cooked enough so I didn't send it back. The very center not quite white yet.
                    It was a cold, windy November day and they sat us right near the door when there were plenty of spaces deeper in.  Every time some one came or went we got a breeze.
                    It wasn't too busy so not too many times. The table itself was stone cold.
                    Wish we could like it, but nothing outstanding to draw us.
                    The decor is remarkably plain. Shades of what used to be called avacado green. Few if any pictures or art pieces.
                    The restroom was okay. One of two sinks out of order.`,
                    userId: 6,
                    businessId: 1,
                },
                {
                    rating: 5,
                    content: `Wicked Restaurant & Wine Bar has been my favorite dining establishment in Mashpee since I moved here in 2013. I just started going back since Covid & am truly impressed by the service & excellent quality of the food. These times are not easy for the food service industry but Wicked has managed to stay wicked amazing! To anyone reading this, please be kind to ALL restaurant workers no matter where you dine. They are working their butts off to give you a great experience.

                    I highly recommend any of the salad entrees, salmon poke bowl, and gluten-free pizzas. Honestly, I've never had a bad dish. Hope to see you at the bar sometime (with the amazing bartenders Dave, Julie, Ed, & Kevin).`,
                    userId: 7,
                    businessId: 1,
                },
                {
                    rating: 3,
                    content: `Decent lunch spot. Atmosphere is nice and very clean. The TVs at the tables seem a bit out of place since decor is on the fancier side. Our server was nice but forgot many things. The espresso martini was good and so were the parmesan truffle fries, but we asked for ketchup and it didn't arrive until we flagged down a manager. Same thing happened with crackers and we never received the salad that we ordered. We were also one of 3 tables in the whole restaurant.

                    Even with the mishaps, we enjoyed the buffalo chicken pizza. Although the server wasn't the best, he was nice and pleasant. We may try again at a later date.`,
                    userId: 8,
                    businessId: 1,
                },
                {
                    rating: 5,
                    content: `Wicked has been great since they opened. Consistently good food, fantastic wines by the glass and a fun rotation of beers on tap. My family enjoyed the hot spinach and feta dip with flatbread and deviled eggs for an appetizer- delicious. Then we shared the spinach and portabella pizza which is a must try. The beet salad was tossed with kale, quinoa, goat cheese and nuts and served with a champagne vinaigrette and grilled chicken- it's my new favorite. The portions are generous. Our brownie sundae was a great way to end an awesome dinner. There are many gluten free options for families as well. The servers are knowledgeable about the menu and are thorough and efficient. If you haven't been, check them out!`,
                    userId: 9,
                    businessId: 1,
                },
                {
                    rating: 4,
                    content: `Great place that is a step or three above typical Cape family fare.  Best deviled eggs I've had out and the pizza is excellent and varied.  One of our "go-to's"`,
                    userId: 10,
                    businessId: 1,
                },
                {
                    rating: 2,
                    content: `Some of the most mediocre and expensive food I have had in a while. This place was recommended to me based on dietary restriction and limited options eating out. My girlfriend and I have issues with gluten and dairy (among other things), so we are really careful when it comes to eating "outside food".... However, she just ran a marathon the menu seemed to cater to specific food issues, so we gave it a go.
                    A pizza, 2 orders of fries, flat bread with hummus and a good, albeit small, order of gluten free pasta with Bolognese. $64 plus tip. Which would be fine (we are used to this) IF 1- the food tastes good AND/OR 2- we didn't experience intestinal discomfort. Unfortunately, both fell short. Food was shit and we STILL experienced stomach issues.
                    Frustrated with businesses who appear to cater to food intolerances and allergies, but don't actually seem to care when it comes to execution (like...avoid cross contamination, clean gloves, specific knives, specific workstation, specific storage,).
                    The humans I talked to were fine. Manager was helpful.
                    I've been in the restaurant industry for almost 15 years, so perhaps I'm just bitter because I KNOW it can be done better.
                    Bummed`,
                    userId: 11,
                    businessId: 1,
                },
                {
                    rating: 3,
                    content: `Not bad, but not great.`,
                    userId: 12,
                    businessId: 1,
                },
                {
                    rating: 3,
                    content: `I really don't have anything positive to say about Wicked. The food here is always fine, the service is always fine, everything is always fine. Nothing has every been great. I guess if you are local and looking for something you know will be fine and don't have high expectations just come here, if you are visiting and want something great don't waste your time or money.`,
                    userId: 13,
                    businessId: 1,
                },

                // second business
                {
                    rating: 5,
                    content: `Came here on a Saturday late afternoon with my mom! Right when you go inside, there is a self order machine where you order. I didn't notice any hand sanitizer around it so my advice is recommended to have a bottle laying somewhere where it is easily noticeable.

                    My mom and I ordered 4 Mochi Waffle. Taro with nutella, Red Bean with Chocolate, Plain Pandan, and Plain Black Sesame. It was a 20min wait which are made fresh on the spot. Once I got the waffles, they smelled sooo good and warm!! It's crunchy on the outside and very soft inside. Definitely have that alittle but if Mochi bite and pull.

                    Parking was a bit small. But there was some open spots left. The Waffle shop is also clean but I wished it was a bit social distance cause it can get a bit stuffy as people starts coming to line up. Maybe have a sign saying 2-3 people at a time so it doesn't feel too crowded.

                    5 stars because the staffs were super friendly as I asked them questions and the waffles are amazing. I know they just open so its bound to have some feedback to learn and improve with health safety. :)

                    `,
                    userId: 9,
                    businessId: 2,
                },

                // third business
                // none

                // fourth business
                {
                    rating: 3,
                    content: `Good food, good prices, definitely very greasy but nothing I love more than greasy Chinese food! Staff is sweet as well.`,
                    userId: 8,
                    businessId: 4,
                },
                {
                    rating: 4,
                    content: `I first visited Golden Sails during the Coronavirus lockdown. I called ahead and food was ready in 10 minutes. You pick up food via a drive through like at McDonalds. Here is what I ordered:

                    Spareribs on bone - A-
                    Chicken Fingers - A-
                    Crab Rangoon - F
                    Pork Chow Mein - A
                    Pork Fried Rice - A-

                    As you can see the food for the most part was delicious. The Crab Rangoon was horrific. Overcooked, dry, chewy. So chewy I couldn't bite through it. Worst I've had in 51 years and I've had many. If you can't cook them decently take them off the menu!!!!! Nasty. Nasty.

                    I will return but will stay away from the Crab Rangoon.`,
                    userId: 7,
                    businessId: 4,
                },
                {
                    rating: 3,
                    content: `This is a very simple old school American Chinese restaurant. I ordered 3 entrees: Beef with Scallions, salt n pepper Pork Chop, and Sautéed Bok Choy.
                    They did not ask me if I wanted a small or large size which was unfortunate bc I ended up with about 12 lbs of food which was complete overkill. They are big on the portions here anyway so BE MINDFUL
                    OF THAT WHEN ORDERING. So I wasn't crazy about the beef with scallions. I just really didn't think it was that good. The Bok Choy was good but not earth shatteringly good. The S&PPork was very good. I will definitely go back again & order an appetizer & 1 small item. I will try their chicken dishes. I saw some other people eating either gen Tsaos or orange chicken & it looked good.`,
                    userId: 9,
                    businessId: 4,
                },

                // fifth business


                {
                    rating: 4,
                    content: `Leave it to Ben to figure out a way to squeeze in a baseball game in Baltimore while we are in DC and somehow the Rays happen to be in town. This was on his lists of ballparks that he still needed to visit so it was basically, "We are going".

                    When entering the park there is a brick warehouse that runs along the wall and I honestly do not know if it is there for a purpose or just there to create a specific feel because once we entered the workers were quick to tell us we had to keep moving and we weren't allowed to stop and look around. I was able to get some pictures in but the "keep moving" announcements were right behind me the whole time which was pretty annoying.

                    Walking around the area to get to our seats was fun to see all the different things they had to offer compared to other ball parks like you can get crab cakes, oysters and lobster rolls here vs a hot dog! I also noticed that they have a pretty good selection of local beers that you're able to buy, including one specifically for them. Of course, Ben went right for the local stuff.

                    Our seats were pretty good for last minute and at a good price. Probably a little lower than usual given the Oriole's current record.`,
                    userId: 6,
                    businessId: 5,
                },
                {
                    rating: 5,
                    content: `The limited capacity had its drawbacks but also its advantages. You're not packed like sardines, there are hand washing stations scattered throughout the mezzanine, and the lines for beer are not as long. I was mad because I didn't get to try 'Steady Eddie' beer before it sold out near my part of the park.

                    The prices I think are higher than normal  for 2 beers and a soda, the bill came to $32.50. FOR THREE DRINKS. Anyway, I can't seems to go to a baseball game and not have at least one cold one.`,
                    userId: 7,
                    businessId:5,
                },

                // sixth business
                {
                    rating: 3,
                    content: `PINK PINK PINK. If you love pink and Japanese aesthetics, this place is for you.

                    I was on the hunt for matcha stores in the Bay Area and happened to stumble upon Amausaan Uji Matcha. It's located in a rather empty plaza next to a child's costume store. It's a bit tucked in, just a heads up if you are trying to find it.

                    As I waited in, I was everything I wanted as far as aesthetics. I believe it was 12 p.m. on a Saturday but no one was there besides me and my cousin. The staff was super nice and helpful and very patience since I took a while to order. SO MANY OPTIONS.

                    In the end, we got a sakura latte, a matcha red bean latte, a sakura crepe cake, and a matcha parfait. Our food was presented in a cute wooden circle tray and we sat down next to the fake cherry blossom for the fantasy.

                    The reason I'm giving is 3 is because as cute as the place was, I felt like the drinks and food were a bit mediocre.  I did enjoy the parfait but in terms of the lattes and cake, it was meh. I had better. It's not bad but I did hope for something more flavorful.

                    I would come once to try, maybe there are other options in the menu that are more worthwhile.`,
                    userId: 13,
                    businessId: 6,
                },
                {
                    rating: 3,
                    content: `Cute, very Japanese decor, interesting offerings that center around matcha and hojicha, and quite expensive pricing.

                    I was greeted with a shocking wave of pink upon walking in. Decor was plentiful around the shop, and there were small tables with stools situated around for seating after ordering. I wasn't a fan of the tables being somewhat sticky, but could've been my bad luck coming at a time when the store was quite busy.

                    Crepe cake -- these have become very popular in the past few years, and I was excited to see there was a hojicha flavor in addition to matcha and other more traditional flavors. The crepe cake itself was pretty good, with soft cream folded in between the crepe layers. I found the top layer of cream had a bit too much gelatin in it, so it semi-slid off of the top (as pictured in the photo), but texturally it was fine. I would have loved a punch more hojicha and found this version mild but tasty.
                    Hojicha latte -- very creamy and not too sweet, this was a nice treat for a chilly night. I found the drink so creamy it was a little difficult to finish towards the end, and I might opt for the royal hojicha without milk next time. Flavor was good and if I hadn't had a large dinner beforehand, this would have been the perfect treat.

                    My biggest barrier to coming back would be the pricing, which I found ranged a few dollars more expensive per item than similar items elsewhere. I'd be happy to come back for a treat or with a group though, it just wouldn't be a common stop for me.`,
                    userId: 12,
                    businessId: 6,
                },
                {
                    rating: 5,
                    content: `4.5 stars. I'm amazed this place exists in Newark and Union City now! What a treat - I'm obsessed with matcha (drink it every day) and can say the matcha here is top quality. The only negative was the mochi, see later in this review.

                    The interiors are adorable - everything is pink and Japan/Sakura/tea house themed. I'm obsessed! My friend and I chatted here for a while, and there many groups of people having a great time.

                    The matcha quality is so good! We got it mostly in the form of ice cream but I really want to come back to try their matcha drinks. Just didn't feel like I could handle the caffeine from two matcha items in the afternoon haha.

                    We got the D1 and D6, both ice cream sundaes, and they were lovely! They are *quite* expensive for dessert, but matcha tends to run pricey and given the variety of things in the sundae, I think the price is somewhat justified. There was clear sweet jelly, light cream/pudding, granola, matcha ice cream, grass jelly, red bean in the D1 along with a ton of different toppings like shortbread, strawberry, mochi. I will say though the mochi is not my favorite - way too dense and chewy in the center. My friend who got the D6 specifically for the mochi wasn't too happy with that part, but was happy with everything else.`,
                    userId: 3,
                    businessId: 6,
                },
                // seventh business
                {
                    rating: 4,
                    content: `This is our second visit to Texas Jack's Barbecue. Both times we got the Smoked Wings as an appetizer (with Buffalo sauce). They are stellar. The smoky flavor permeates to the bone, and the skin is nice and crispy.

                    We also got the Beef Rib. One is large enough to share. The meat has a delicious  coating of bark, while the interior is moist and luscious. The flavor is amazing, not needing any sauce. It is one of the best beef ribs I've had.

                    I loved the Brussels Sprouts we got as a side. They were tender and very flavorful, with plenty of caramelization. I was less happy with the baked beans. They were supposed to contain burnt ends, but there wasn't enough of the meat to make a difference. Also, the beans were firmer than I would have liked.`,
                    userId: 7,
                    businessId: 7,
                },

                // eighth business
                {
                    rating: 5,
                    content: `Worked with Joe Tuerff and Evan Boyd.  They've been great to work with in planning the new build pool and spa for my Sun City home.`,
                    userId: 4,
                    businessId: 8,
                },
                {
                    rating: 1,
                    content: `I do not even want to give Shasta pools any stars!  We had our pool built in 2006 and were grandfathered in to a lifetime warranty.    Over time our overspill from our hot tub to our pool started cracking to where the pebble Tec was chipping off into our pool.   To make a long story short, because of a West facing pool that is why our pool began to crack and it's a "normal wear and tear" and no #Warranty.   Had we known this from day 1 from the design center and given us this useful information we probably would have chosen another design or way we had the hot tub facing.
                    The warranty management was so rude and incredibly unprofessional and would not even work with us on a resolution.
                    I Do Not Recommend Shasta Pools!`,
                    userId: 3,
                    businessId: 8,
                },

                // ninth business
                {
                    rating: 4,
                    content: `I'm in love with this hotel because of the fountains for sure. I stayed here with the amex platinum fine hotel credit. I was very pleased with the lady who checked us in. She was super nice and explained everything in detail. We were upgraded with the amex plat to a fountain view which I was very pleased with. It was one of my favorite stays in Las Vegas! Location and view were everything for this hotel. Take a stroll through the conservatory garden, which is always a beautifully well-done work of art. We were there while they were putting up the Chinese New Year decorations and I was stunned by how beautiful it was when they finished!

                    The room was clean and very comfortable. I would also recommend checking out their restaurants, which are right by the fountains. I went to Spago for breakfast and Prime for dinner. I look forward to staying here again in future visits!

                    `,
                    userId: 5,
                    businessId: 9,
                },
                {
                    rating: 2,
                    content: `If Bellagio is still a AAA 5-Diamond award hotel it's a crying shame. Upon entering our room (mobile check-in so we skipped the front desk) we quickly realized from the smell that they gave us a smoking room in error. I called guest services and they reassigned us to another room, saying to wait about 15min before our mobile app key would work. We waited...went to our new room...and couldn't access the room. I had to go downstairs and get actual room keys to gain access to the room. My wife then told me that the toilet had a hair on it and there was a brown stain on the outside of the bowl. We called housekeeping and they never came to clean. It was a day later when we flagged down a housekeeper and asked if they would kindly clean the outside of the bowl.

                    Security for the elevators is even more of a joke than before. They have a scanner that you're supposed to scan your hotel card but no one does. Security personnel, when they're there (not always), never check to see if you have a hotel key. Granted it was security theater before as it's not hard to grab a hotel key and pretend it's yours, but come on, don't bother if you're not going to at least pretend to care.

                    We'll stay at the Venetian next time. Bellagio has lost our business.`,
                    userId: 3,
                    businessId: 9,
                },
                {
                    rating: 4,
                    content: `Did not get a chance to stay here for our trip but we went there to see their hotel!
                    Beautifully decorated gardens and an insta worthy spot for insta lovers!
                    P.s. do go to all the hotels on Las Vegas Strip. They are all unique and beautifully decorated!`,
                    userId: 6,
                    businessId: 9,
                },
                // tenth business
                {
                    rating: 5,
                    content: `Definitely a good place to stop in and have some pizza. I personally can't eat gluten but I appreciate that they have a cauliflower crust and it doesn't take away from the taste of the pizza. My personal opinion try the spicy curry chicken pizza, if you like spicy you won't be let down. The mango lassi is also off the chain. Owner is friendly and down to earth, What more could you ask for?`,
                    userId: 13,
                    businessId: 10,
                },
                {
                    rating: 4,
                    content: `We ordered delivery from here and ate too fast for photos!
                    However overall good pizzas with a great dough.
                    We got the chili paneer and chicken tikka pizza. Both were great with a good amount of toppings but beware, the chili paneer is very spicy!
                    We will definitely come back here, the only reason I took a star off is because they were super salty and left me dying for water afterwards.

                    Overall this is a solid pizza place and would recommend`,
                    userId: 10,
                    businessId: 10,
                },
                {
                    rating: 5,
                    content: `Just came into town on business and stumbled on this treasure of spice and savory delights.  I had the tandoori pizza and it was amazing!  Sliced pieces of tandoori chicken heavily spread on top of a blend of sauce direct from flavortown.  The crust was light and a perfect compliment to the bountiful toppings.  When I'm back in Sunnyvale I'll definitely return.  Props to the crew!`,
                    userId: 11,
                    businessId: 10,
                },
                {
                    rating: 5,
                    content: `They nailed the crust!! Like crispy naan.
                    Lemonade is actually made from limes and... well, you'll have to try it. Ingredients are very fresh, place is clean, service is friendly. I posted a picture of the pizza here but ate most of it before the photo.`,
                    userId: 6,
                    businessId: 10,
                },
                {
                    rating: 5,
                    content: `OMG this pizza was SO GOOD! My friend and I stopped in for a quick lunch and ordered smalls of the chicken tikka and the tandoori bbq. They took about 15 minutes to cook and were so perfect and amazing. We honestly can't decide which we liked more because they were both delicious and nice and fresh. I cannot wait to order from them again. The staff was so nice and friendly too.`,
                    userId: 8,
                    businessId: 10,
                },




            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Reviews", null, {});
    },
};

<template>
  <IonGrid>
    <IonRow>
      <div class="faq-container">
        <!-- FAQ 1 to 20 -->
        <IonRow>
          <div class="title" @click="toggleSection('section1')">
            1- Why should I post an offer on the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section1')">
          <p>Posting an offer on the London Entrepreneurs Network is FREE and targeted advertising. It is searchable so you know that any member looking for what you offer will be able to find you as easily as possible. Marketing online does not get simpler or more effective.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section2')">
            2- Why should I exhibit at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section2')">
          <ul>
            <li>London Entrepreneurs Network events see the largest gathering of businesses every month in the country. Exhibiting at London Entrepreneurs Network events is the cheapest in the world and offers extraordinary value given the 1,000s of people you can make contact with.</li>
            <li>All London Entrepreneurs Network exhibitors can give an elevator pitch. This can be expanded all the way to a 4-hour presentation in front of a pre-selected audience of interested prospects for just &pound;3,000.</li>
            <li>FREE refreshments including beer, tea, coffee, biscuits and sometimes food and wines keep exhibitors and visitors within the London Entrepreneurs Network floor space. This means more business can be done as people mingle within our space and the fact that they are kept in comfort means they stay interacting for longer.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section3')">
            3- How long has the London Entrepreneurs Network been operating?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section3')">
          <p>The London Entrepreneurs Network started operating in 2008 and has experienced rapid growth. In this time, we have helped 10,000s of entrepreneur and business connections take place.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section4')">
            4- Why does the business network need to select the best offers?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section4')">
          <p>The popularity of our website means that we have a large supply of businesses in certain areas. We believe it is best for the user of our business network to see the best in each field. As our user's interests are the top priority of the London Entrepreneurs Network, we have made it easy to see the current best option available.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section5')">
            5- Why do you ask me to fill out my 'needs' when filling out my profile?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section5')">
          <p>We encourage members of our business networking group to post 'needs'. These are simply things they are looking for and let other users know why they are on our business platform. Members can search through posted needs to see if they can satisfy them. Knowing what people are looking for is a huge advantage for suppliers. Our business model is designed to allow members to find each other and interact with as little effort as possible.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section6')">
            6- How big does the London Entrepreneurs Network plan to become?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section6')">
          <p>We have two goals regarding the future shape of the London Entrepreneurs Network:</p>
          <ul>
            <li>Firstly, we intend to put on the largest business show in the world and hold it regularly in the capital.</li>
            <li>Secondly, we intend to grow our online business platform to become the biggest and best business networking group in the world.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section7')">
            7- Why do we offer a FREE share to all members of our online business platform?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section7')">
          <p>We value every member of our business network and are continually looking for ways to reward investment in us. We believe making members a part of our success is only fair. It is the actions of entrepreneurs, business owners, and investors that have created us and we find it only fitting that they should be the ones profiting from our growth.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section8')">
            8- Why do we allow members of our business network to advertise for FREE?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section8')">
          <p>We allow members of our business platform to advertise for FREE because we see it as fair and because it fits our business model.</p>
          <p>Allowing members to display advertising for FREE draws new members to our business network and ensures the audience for our members' marketing communications keeps on growing. We benefit from having a thriving business platform that offers a way for entrepreneurs and business owners to make new business connections.</p>
          <p>We believe that when focusing on growing, providing services that are desired, and ensuring long-term benefits for our members is the way forward for our business networking group.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section9')">
            9- How can I advertise at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section9')">
          <p>We offer many ways to advertise at our business shows. We operate workshops, let you give presentations, and put up and hand out marketing material.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section10')">
            10- What makes the London Entrepreneurs Network the best business show in the UK?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section10')">
          <ul>
            <li>The first thing that makes our business shows great is its sheer size. We have over 30,000 members and are growing fast. Our events are the biggest monthly business networking events in the country.</li>
            <li>Secondly, it is the service we offer and how we treat VIP and FREE members that keeps people coming back to our business shows. We take time to learn what you are looking for and help you find it amongst our enormous business network.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section11')">
            11- What makes the London Entrepreneurs Network business shows the best exhibitions for London entrepreneurs?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section11')">
          <p>On our gallery and <a href="https://www.youtube.com/channel/UCo-igWT6C0JB1tB4ANeO7gg">YouTube page</a> you can see the number and range of businesses that attend our events. As a FREE member or visitor, you will get the opportunity to talk to entrepreneurs, business owners, and investors. If you become a VIP member, you will also receive personal introductions to people selected for their potential to help their business.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section12')">
            12- Why are groups so important to my business development?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section12')">
          <ul>
            <li>Joining small networking business groups inside our larger business platform can be a pivotal moment for an entrepreneur or business. Joining forces with people within your own industry is far more valuable to you than simply being a member of a larger, more general group.</li>
            <li>You will find entrepreneurs and business owners who have faced and overcome any challenges you are facing.</li>
            <li>You will also make important business connections that strengthen your standing in your industry. This can be physical suppliers or contacts that both parties benefit from sharing.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section13')">
            13- Does the London Entrepreneurs Network allow me to send mass marketing emails to members?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section13')">
          <ul>
            <li>Yes, you can send an email to 10,000 people for just &pound;300 and 30,000 people for only &pound;850. Our emails receive an impressively high 30% open rate and 5% conversion rate.</li>
            <li>You can write your own emails but benefit from the reputation we have built amongst our members for offering lucrative leads to them.</li>
            <li>The London Entrepreneurs Network are experts in online marketing strategies and marketing communications and we allow our entrepreneurs and business owners to benefit from our expertise.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section14')">
            14- What makes service and products exchanging great for my business?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section14')">
          <p>Exchanging goods and services frees you from always dealing with cash. Many business owners find that they have unused products or facilities going to waste. As you have already paid out to acquire them, wouldn't it be great if there was some way of turning them into a trade-able commodity? On our online business platform, you can.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section15')">
            15- Why do we allow members to display free ads?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section15')">
          <p>We allow members of our business platform to display ads for free because it is fair and aligns with our business model. It draws new members, ensures a growing audience for marketing communications, and supports a thriving business platform.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section16')">
            16- What benefits do free ads provide?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section16')">
          <p>Free ads benefit our members by increasing their exposure and reaching a broader audience. They contribute to the growth of our business network and provide valuable opportunities for entrepreneurs and business owners.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section17')">
            17- How can I enhance my experience at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section17')">
          <p>To enhance your experience, actively participate in workshops, presentations, and networking opportunities. Engage with exhibitors, attend relevant sessions, and make the most of the resources available at our business shows.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section18')">
            18- How does the London Entrepreneurs Network support member growth?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section18')">
          <p>We support member growth through various initiatives including workshops, networking events, and personalized introductions. Our platform offers tools and resources designed to help members expand their businesses and build valuable connections.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section19')">
            19- What are the advantages of becoming a VIP member?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section19')">
          <p>VIP membership offers exclusive benefits such as personalized introductions, enhanced visibility, and access to premium events. VIP members receive tailored support to maximize their business opportunities within our network.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section20')">
            20- What makes service and products exchanging great for my business?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section20')">
          <p>Exchanging goods and services frees you from always dealing with cash. Many business owners find that they have unused products or facilities going to waste. As you have already paid out to acquire them, wouldn't it be great if there was some way of turning them into a trade-able commodity? On our online business platform, you can.</p>
        </IonRow>


        <!-- FAQ 21 to 40 -->
        <IonRow>
          <div class="title" @click="toggleSection('section21')">
            21- How are best offers broken down on the London Entrepreneurs Network website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section21')">
          <p>With 80% of our members being startups or small to medium-sized businesses, we have selected key areas that most small businesses will need to use. These include marketing, accountancy, investment, law, business advice, web development and design, and office space. The level of competition is high, and members awarded best offer status on our platform have earned it by providing high value for money.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section22')">
            22- Where can I meet fellow London Entrepreneurs Network members?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section22')">
          <p>We allow members to meet wherever they want, with no restrictions on interactions whether online or in person. We are confident that the business connections you make on our platform will be beneficial, even outside our network. We believe that once you experience the possibilities, using our website will become as common as using other social platforms like Facebook.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section23')">
            23- What kind of presentations can I put on at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section23')">
          <ul>
            <li>Exhibitors for £50 can give a brief elevator pitch of their business.</li>
            <li>An up to 30-minute presentation is available for £500, with around 30 interested parties in the audience, plus contact data on each attendee and a two-week minimum build-up to the show.</li>
            <li>4-hour workshops are available for £1,000, with 30 to 200 pre-selected members in the audience.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section24')">
            24- How does the London Entrepreneurs Network decide which offers become best offers?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section24')">
          <p>Best offers are awarded based on member satisfaction with the product or service. We also consider the scale of the company and its ability to replicate success, ensuring future customers' needs are met to their fullest potential.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section25')">
            25- What kind of business connections do needs facilitate?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section25')">
          <p>Depending on your needs, you can find suppliers for material goods or entrepreneurs/businesses willing to partner with you. With over 30,000 members, you have a great chance of finding what you want.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section26')">
            26- When do I receive my offer of a formal share in the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section26')">
          <p>Once your profile is 100% complete, we will offer you a share in our business network, which you can accept or decline.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section27')">
            27- How do I apply for best offer status on the London Entrepreneurs Network's website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section27')">
          <p>You can apply to have your offer assessed by filling out the details in our <a href="http://contact-uswww.londonentrepreneursnetwork.com/advertise-for-free">best offer</a> section. Being awarded best offer status brings higher visibility and increased custom from the business network.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section28')">
            28- How many London businesses will see my advert?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section28')">
          <p>The London Entrepreneurs Network has over 30,000 members and many thousands of interested visitors accessing the website weekly. Adverts are prominently placed on the left and right-hand sides or at the top of business listings. Our platform is particularly effective if your typical customer is another business.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section29')">
            29- What is the dress code at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section29')">
          <p>There is no dress code, so you can attend in whatever attire you prefer. Consider what best suits your sector and the impression you wish to make. While business ideas are the main focus, most attendees choose to dress in a business manner.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section30')">
            30- How many offers can I post for FREE on the London Entrepreneurs Network website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section30')">
          <p>You can place as many offers as you want on our platform. Posting offers is always FREE, and you can make business connections ranging from simple sales to long-term partnerships.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section31')">
            31- How many London businesses will see my advert?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section31')">
          <p>The London Entrepreneurs Network has over 30,000 members and many thousands of interested visitors accessing the website weekly. Adverts are prominently placed on the left and right-hand sides or at the top of business listings. Our platform is particularly effective if your typical customer is another business.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section32')">
            32- What is the dress code at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section32')">
          <p>There is no dress code, so you can attend in whatever attire you prefer. Consider what best suits your sector and the impression you wish to make. While business ideas are the main focus, most attendees choose to dress in a business manner.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section33')">
            33- How many offers can I post for FREE on the London Entrepreneurs Network website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section33')">
          <p>You can place as many offers as you want on our platform. Posting offers is always FREE, and you can make business connections ranging from simple sales to long-term partnerships.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section34')">
            34- What is the current make-up of the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section34')">
          <p>Currently, our business network is comprised of 60% startups, 5% investors, 20% small to medium-sized businesses, and 10% pre-startups. We offer member information for FREE, and as we grow, we will further delineate our network. With 5% of members being investors, there is a significant number of individuals or companies willing to offer over £50,000 investment. The 80% small to medium-sized businesses indicate that our network is ideal for B2B selling.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section35')">
            35- How can I make sure my business advert appears above all others?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section35')">
          <p>For £10,000, you can place a video advert at the top of our pages. With thousands of weekly visitors, this can have a huge impact. For this price, our rapidly growing online business platform will showcase your personal advertisement for a month.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section36')">
            36- How can I benefit from the business knowledge of the London Entrepreneurs Network and its members?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section36')">
          <ul>
            <li>All small businesses and entrepreneurs can benefit from professional business advice from our extensive network.</li>
            <li>You can also directly connect with other businesses for advice and collaboration opportunities.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section37')">
            37- What is a scenario when bartering services and products makes sense?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section37')">
          <p>Exchanging goods and services frees you from always dealing with cash. Many business owners find that they have unused products or facilities going to waste. As you have already paid out to acquire them, wouldn't it be great if there was some way of turning them into a trade-able commodity? On our online business platform, you can.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section38')">
            38- What should I bring with me to a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section38')">
          <p>You can bring all the marketing materials you want and hand them out to anyone you meet. It might also be useful to take an electronic device or a pad of paper for making notes. This way, you can make the most out of conversations and follow up either online or in person later.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section39')">
            39- What can I post as an offer?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section39')">
          <p>We are committed to growing our business network. Offering a service that is unique or not readily available elsewhere is a great way to attract attention and encourage new members to join the London Entrepreneurs Network.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section40')">
            40- What makes the London Entrepreneurs Network the greatest online business platform for business networking?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section40')">
          <p>Many features of our business platform are either ground-breaking or unique. Everything on the site has been specifically designed for a large number of businesses and entrepreneurs to find exactly what they are looking for, making it an unparalleled platform for business networking.</p>
        </IonRow>










        <!-- FAQ 41 to 60 -->
        <IonRow>
          <div class="title" @click="toggleSection('section41')">
            41- How do I filter members of the business network by data such as user type, income, or number of employees?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section41')">
          <p>You can filter members of the business platform through a number of data sets such as company size and connections by simply selecting the category you want from the list provided on the left-hand side of our business listings pages.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section42')">
            42- What do I need to sign up to the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section42')">
          <p>All you need to join our business networking group is an email address and to create a password. Once you enter both, an email will be sent to your registered email account immediately.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section43')">
            43- What makes the London Entrepreneurs Network the best social media platform to advertise on?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section43')">
          <p>Firstly, we are committed to allowing you to advertise for FREE forever. This means a tremendous amount of both new and regular companies using the service every month.</p>
          <p>Secondly, we provide plenty of <a href="http://www.londonentrepreneursnetwork.com/adverts">paid options</a> that will increase your reach and the return you receive.</p>
          <p>Our business model is designed to give you everything you need from a business networking group at as little cost as possible. Many of our FREE services offer greater capabilities than our competitors' paid options.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section44')">
            44- How do I know the advice I receive will be beneficial to my business?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section44')">
          <p>Business development has always been a key factor in the London Entrepreneurs Network. With a successful entrepreneur at its helm, the London Entrepreneurs Network has experience advising businesses of all sizes.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section45')">
            45- What can I post on the London Entrepreneurs Network feed?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section45')">
          <p>Members can post whatever they want, be it pictures, marketing material, or questions. Posting can be a great way of reaching out to members of or visitors to the website. The London Entrepreneurs Network is both a business platform and a social platform; we have developed a website where both elements complement each other, and a user-generated news feed is just one example of this.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section46')">
            46- How do I get my business listed on your business network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section46')">
          <p>To become a listed member, all you need to do is create an account for FREE. Your account will be displayed in our list of businesses whenever a user searches for something. The more complete your profile is, the higher you will appear and the better the impression you will make. Business networking works on trust, and the more information you provide on yourself, the more trustworthy you seem.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section47')">
            47- How do I place my business at the top of the London Entrepreneurs Network business directory?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section47')">
          <p>Members are listed in order of how complete their profile is. You can leapfrog every business, however, by becoming a VIP or VVIP member. As a networking group, visibility is key to success in business marketing online. Regularly posting needs and offers, placing adverts at the sides of the page, and creating connections with others all raise your profile amongst the business network.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section48')">
            48- How can I get an idea of what to expect at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section48')">
          <p>You can take a look at our gallery to see images of past business shows.</p>
          <p>You can see videos of past exhibitions on our <a href="https://www.youtube.com/channel/UCo-igWT6C0JB1tB4ANeO7gg">YouTube page</a>. These include past speakers and testimonials informing you of what to expect and giving you tips to make the most out of our business shows. If you want your presentation to be filmed and uploaded, it can keep working for you online for years to come.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section49')">
            49- How does the London Entrepreneurs Network continue to put on the best exhibitions in the capital?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section49')">
          <p>We make sure both our exhibitors and visitors are satisfied. This takes a lot of effort and planning by us to ensure all members of our business networking group receive what they want.</p>
          <p>We give entrepreneurs and business owners access to the largest monthly business shows in London and allow FREE advertising and refreshments to guarantee continued large turnouts. We also offer VIP members personalized introductions to those interested in buying or investing in their company.</p>
          <p>We also make sure our investors are happy by continuing to offer an exciting range of companies looking for £50,000 or more in finance. We highlight the work our investors do in our TV series Angels Investment Show.</p>
          <p>Every member of the business network is valued by us, and understanding their importance informs how we treat them. Entrepreneurs, businesses, and investors keep on returning to our shows, which we take as the best indication of how well we are performing.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section50')">
            50- What can I contact the London Entrepreneurs Network about?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section50')">
          <p>You can ask any question you want. If you contact us by email, we will get back to you in under 48 hours.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section51')">
            51- I am interested in partnering or sponsoring the London Entrepreneurs Network; what options are available?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section51')">
          <p>We are extremely flexible when it comes to partnering or sponsoring our company or business shows. If you have an idea, we will be happy to listen to it.</p>
          <p>For just £500, we can organize a presentation lasting up to 30 minutes. If you contact us 2 weeks before a business show, we can promote your presentation and deliver around 30 highly relevant attendees. You will also receive the contact details of all members of the audience so that you can follow up later with them.</p>
          <p>The London Entrepreneurs Network started as a networking group on the event platform Meetup. You can get your company logo displayed on our Meetup groups for just £250 per month. This gives you prime space for advertising on one of the largest and fastest-growing business networking groups in the world.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section52')">
            52- What benefit do I get from seeing who is exhibiting at a business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section52')">
          <p>Showing a profile on our floor-plan not only allows exhibitors to display advertising but also gives visitors a chance to plan their day. Seeing that a particular business or individual is exhibiting can give you a reason to attend.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section53')">
            53- How can I book a spot at an upcoming business show on the London Entrepreneurs Network website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section53')">
          <p>You can use our unique <a href="http://www.londonentrepreneursnetwork.com/exhibiting">drag and drop floor-plan</a>. All you need to do is click on the position you want, pay the price displayed, and your profile picture will automatically appear where you selected.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section54')">
            54- How much does it cost to exhibit at London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section54')">
          <p>You can exhibit at our events from as little as £50. You can see the full range of options available and also who else has already committed to our next event on our unique <a href="http://www.londonentrepreneursnetwork.com/exhibiting">drag and drop floor-plan</a>. For £50, you will receive a 1x1m table, unlimited space, electricity, an internet connection, and refreshments. We are proud to always offer the lowest exhibition costs in the world.</p>
          <p>We allow you to display advertising at your stand and hand out as much marketing material as you want. If you are giving one of our 30-minute presentations for £500, we promote your part of our business show for 2 weeks in advance.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section55')">
            55- Can I start a group from the business network feed?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section55')">
          <p>Yes, the business network feed is a great place to start and join conversations. You can make direct contact with those who appear to be interested in the same subjects as you. The business connections you make can then be taken on to our business networking groups.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section56')">
            56- How can I see who is exhibiting at the next London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section56')">
          <p>Simply look on our unique <a href="http://www.londonentrepreneursnetwork.com/exhibiting">drag and drop floor-plan</a> to see the profiles of confirmed exhibitors and where they will be situated. You can see which members of the business networking group will be giving presentations or workshops in private rooms. You can register to attend a workshop in the build-up to a business show. We have a rich and diverse range of businesses offering FREE exhibitions that are sure to add value to your operation and improve your business connections.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section57')">
            57- What can I expect when visiting a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section57')">
          <p>You will be able to meet many exhibitors out in our main area. Rooms off the main open area will be holding workshops and presentations, and speeches will be made by our founder, sponsors, and partners.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section58')">
            58- How does the London Entrepreneurs Network make money from members of the business network investing in each other?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section58')">
          <p>We make money when you do. We get an up to 7% success fee when you successfully acquire investment for your business. Unlike other investment platforms, we never charge just for an introduction.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section59')">
            59- How does the London Entrepreneurs Network compare to other social platforms?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section59')">
          <p>We have taken the best aspects of the most popular social platforms in the world, such as Facebook and Twitter, and repurposed them for businesses to use. We have improved upon the services offered by our rivals. LinkedIn places restrictions on how groups are made that we do not. We also offer FREE advertising where websites that display advertising, such as Gumtree.com, have withdrawn the service.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section60')">
            60- As an entrepreneur, how can I start attracting investment and business partners?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section60')">
          <p>The first step to attracting business investment is to create your profile. You should state what you offer and what you are looking for from others. This information is extremely valuable for you as it sets you up to receive and provide goods and services.</p>
          <p>You can meet with investors or fill out our simple <a href="http://www.londonentrepreneursnetwork.com/apply-for-investment">form</a> to apply for investment.</p>
        </IonRow>





        <!-- FAQ 61 to 74 -->
        <IonRow>
          <div class="title" @click="toggleSection('section61')">
            61- How do I manage which groups I am a member of?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section61')">
          <p>Simply click on 'my account' and then 'my groups' from the list on the left-hand side of the page. Anyone can create or join a group. Making small business networking groups is a great way to get the most out of your time. What you discuss and the business transactions already taking place will be a match to what you need. Getting together with other companies in your sector can improve every aspect of how you do business. Making business connections is vital for the health of your company and the more relevant they are to you, the better.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section62')">
            62- How do I apply for investment in my business?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section62')">
          <ul>
            <li>You can fill out our <a href="http://www.londonentrepreneursnetwork.com/apply-for-investment">form</a> requesting investment or meet physically or online with an investor. The London Entrepreneurs Network has many investors willing to invest £50,000 or more. The London Entrepreneurs Network itself also offers the service of giving investment and loans.</li>
            <li>The best advice for you to follow is to apply online and attend a business show. This way you get to put down all the explanatory data behind why you think you could grow with help and you are then prepared to meet face-to-face.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section63')">
            63- How much money are investors looking to inject into the best business ideas?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section63')">
          <p>Our investors are looking to put £50,000 or more into the best business ideas they can find. They regularly search our online business platform and attend our business shows. Raising capital is no problem for an organisation as large and prosperous as the London Entrepreneurs Network, we simply need to know a little about your business. Our investors are experienced and can spot promising business ideas and help scale them up to maximise profits for both entrepreneurs or business owners and themselves.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section64')">
            64- I'm a small business owner, how do I go about proving my business idea is viable?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section64')">
          <p>Simply go through our <a href="http://www.londonentrepreneursnetwork.com/apply-for-investment">form</a> to show us how your business has performed so far. We ask for the last 6 months of your personal bank statements and the last 3 years of business trading bank statements to get an idea of your company's value. We provide room, however, for you to explain your business model so if you have not been trading for that long or feel your statements do not truly reflect the value of your company you can explain in the form provided.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section65')">
            65- Is the London Entrepreneurs Network an active investor in companies?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section65')">
          <ul>
            <li>Yes, the London Entrepreneurs Network does invest in businesses and you can apply directly to us at the same time you apply to others. This is done through our <a href="http://www.londonentrepreneursnetwork.com/apply-for-investment">simple form</a> or in personal interactions.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section66')">
            66- How many needs can I post for FREE on the London Entrepreneurs Network business platform?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section66')">
          <p>You can post an unlimited number of needs all for FREE. We have made a promise to our members that this facility to post needs for FREE will remain forever.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section67')">
            67- How would my business go about valuing my assets for a services and products exchange?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section67')">
          <p>Put simply, it is up to you to agree on a price. Nothing will go through our business platform without your explicit permission. Prices may be the same as your cash price or you may end up benefiting from lowering your price slightly to make sure your asset does not go to waste. Either way it will only be carried out as a better alternative to letting your asset go unused.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section68')">
            68- How much does it cost to sign up?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section68')">
          <p>Signing up to the London Entrepreneurs Network is completely FREE. You receive many features most business networks charge for at absolutely no cost forever. A FREE member has access to posting needs and offers, posting on our feed and all other areas of our website including starting and joining smaller, internal business networking groups within our larger business network.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section69')">
            69- What can I do with my share in the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section69')">
          <p>You are free to sell it immediately or keep it in order to profit from our continued growth. The London Entrepreneurs Network is well on its way to becoming the organiser of the largest and best business shows in the world and wants you to share in its success. As a member of our online business platform, we will offer you preferential treatment should you want to buy more shares in our company.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section70')">
            70- How much is VIP and VVIP membership to the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section70')">
          <p>VIP membership costs as little as £18 per month. For this, you receive many features that will help in your business development. VVIP membership costs just £178 per month and gives you access to even more amazing features. Both VIP and VVIP members receive priority treatment and personal introductions at our networking events.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section71')">
            71- Can I display my business logo with the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section71')">
          <p>Yes, we can place your logo prominently at our meetup events. All 30,000 plus members of the business network plus thousands of other visitors will see your logo for just £250 for a full month.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section72')">
            72- How can I sponsor the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section72')">
          <p>You can choose to sponsor us for 3, 6 or 12 months from as little as £3,000. For this, you will receive a FREE exhibition stand at our business shows, your company logo displayed for FREE at our meetup groups, the ability to send unlimited emails to 20 selected members of our business network, the chance to put on a 5 to 10 minute presentation and 30-minute workshop, and the contact details of everyone registered to attend.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section73')">
            73- Is it possible to co-organise a business show in London?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section73')">
          <p>Yes. For just £1,000 you can co-organise a business show with the London Entrepreneurs Network. We are extremely flexible when it comes to partnering or co-organising and the more you wish to pay, the greater the stake you have in the business network event.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section74')">
            74- How much does it cost to become a VIP member on the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section74')">
          <p>VIP membership costs as little as £18 per month. This membership provides various business advantages, including exclusive access to features and benefits that enhance your networking and business development opportunities.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section75')">
            75- Can I list my business services for free?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section75')">
          <p>Yes, you can list your business services for free on our platform. We encourage you to take advantage of this opportunity to reach potential clients and partners without any cost.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section76')">
            76- How can I increase visibility for my business on the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section76')">
          <p>To increase visibility, consider upgrading to a VIP or VVIP membership, participating actively in discussions and events, and utilizing the advertising and sponsorship options available. Regularly updating your profile and posting engaging content can also help attract attention.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section77')">
            77- Can I connect with other entrepreneurs through the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section77')">
          <p>Absolutely! The London Entrepreneurs Network is designed to facilitate connections between entrepreneurs, investors, and business professionals. You can join groups, attend events, and participate in discussions to network with like-minded individuals.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section78')">
            78- Are there any exclusive events for VIP or VVIP members?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section78')">
          <p>Yes, VIP and VVIP members have access to exclusive events and networking opportunities. These events are designed to provide additional value and facilitate high-level connections within the business community.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section79')">
            79- How can I provide feedback about the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section79')">
          <p>We welcome feedback from our members. You can provide feedback through our contact form on the website, or by reaching out directly to our support team. Your input helps us improve and serve you better.</p>
        </IonRow>






      </div>
    </IonRow>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonCheckbox, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FAQComponent',
  components: {
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton
  },
  setup() {
    // State to manage visibility of sections
    const sectionVisibility = ref<{ [key: string]: boolean }>({
      section1: false,
      section2: false,
      section3: false,
      section4: false,
      section5: false,
      section6: false,
      section7: false,
      section8: false,
      section9: false,
      section10: false,
      section11: false,
      section12: false,
      section13: false,
      section14: false,
      section15: false,
      section16: false,
      section17: false,
      section18: false,
      section19: false,
      section20: false,
      section21: false,
      section22: false,
      section23: false,
      section24: false,
      section25: false,
      section26: false,
      section27: false,
      section28: false,
      section29: false,
      section30: false,
      section31: false,
      section32: false,
      section33: false,
      section34: false,
      section35: false,
      section36: false,
      section37: false,
      section38: false,
      section39: false,
      section40: false,
      section41: false,
      section42: false,
      section43: false,
      section44: false,
      section45: false,
      section46: false,
      section47: false,
      section48: false,
      section49: false,
      section50: false,
      section51: false,
      section52: false,
      section53: false,
      section54: false,
      section55: false,
      section56: false,
      section57: false,
      section58: false,
      section59: false,
      section60: false,
      section61: false,
      section62: false,
      section63: false,
      section64: false,
      section65: false,
      section66: false,
      section67: false,
      section68: false,
      section69: false,
      section70: false,
      section71: false,
      section72: false,
      section73: false,
      section74: false,
    });

    // Method to toggle section visibility
    const toggleSection = (section: string) => {
      sectionVisibility.value[section] = !sectionVisibility.value[section];
    };

    // Method to check if a section is visible
    const isSectionVisible = (section: string) => {
      return sectionVisibility.value[section];
    };

    return {
      toggleSection,
      isSectionVisible
    };
  }
});
</script>

<style scoped>
 .faq-container {
    margin: 20px 0;
  }

  .title {
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
    background-color: #f1f1f1;
    border-bottom: 1px solid #ddd;
  }

  .description {
    padding: 10px;
    background-color: #fafafa;
  }
</style>

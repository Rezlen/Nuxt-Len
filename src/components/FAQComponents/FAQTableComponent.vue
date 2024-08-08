<template>
  <IonGrid>
      <p class="TopTitle">All Your Question answered Here, if not simply contact Us through the Contact Us Page!</p>
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
            2- How can I contact the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section2')">
          <ul>
            <li>You can use our <a href="http://www.londonentrepreneursnetwork.com/contact-us">contact us page</a> to send us an email or contact us by phone on 07591 020664. You can write to us at We Work Moorgate, 1 Fore Street, London, EC2Y 5EJ.</li>
            <li>We guarantee to reply to your emails within 48 hours.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section3')">
            3- Can London startups join the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section3')">
          <ul>
            <li>Yes, the London Entrepreneurs Network is a great place to create a business; all you need is a plan. We work with many pre-startups, meaning people that have not been through the process of setting up a business but have a great business idea. We have many experienced London entrepreneurs who can help you along your journey to financial success.</li>
            <li>The London Entrepreneurs Network has a mixture of members from those just setting up a business to multinational corporations.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section4')">
            4- Why should I join the London Entrepreneurs Network business platform?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section4')">
          <ul>
            <li>As a member of the London Entrepreneurs Network, you receive all the benefits of traditional networking but on an enormous scale. Our filtering system allows you to quickly make contact with exactly who interests you the most from a huge range of companies.</li>
            <li>The London Entrepreneurs Network has created a ground-breaking online platform that is unique in all the features it offers for FREE and it is committed to offering these services FREE forever.</li>
            <li>Through the London Entrepreneurs Network website, you can see who is attending and exhibiting before events, letting you plan your day in the most efficient way possible. Most other business networking organizations are afraid of offering this for FREE, but we believe in focusing on creating the best possible member experience above all else.</li>
            <li>VIP and VVIP membership can be gained from as little as £18 per month and allows you to be introduced to people pre-selected for their interest in purchasing or investing in what you are offering.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section5')">
            5- How big are the London Entrepreneurs Network business shows?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section5')">
          <ul>
            <li>Our business shows have grown to become the largest monthly business networking group in the country. We are extremely ambitious and growing fast. With over 30,000 current members and growing by 1,000 a month, we aim to put on the largest and best business show in the world.</li>
            <li>We set up to help entrepreneurs and business owners find investment, partners, and customers in London. We have since expanded to cover global companies and attracted a huge range of businesses to our business network.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section6')">
            6- Why don't other networking groups give out as much information on exhibitors and attendees?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section6')">
          <p>Other business networking groups withhold information on who is attending for a number of reasons. Firstly, they know that the information is valuable, so they may only allow paid members to view it, and secondly, they are afraid of other business networking groups contacting their members.</p>
          <p>We justifiably believe our business networking events are the best in the country and so are not afraid of competition. We also believe that creating the best user experience is our top priority, and knowing who is attending business shows adds to the value we offer.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section7')">
            7- Why does the London Entrepreneurs Network have a members feed?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section7')">
          <p>The London Entrepreneurs Network has taken the best elements of the most popular social platforms and used them to create a business platform that encourages business connections. We deliver the facilities people have come to expect from a social platform, and the ability to keep up to date with the latest goings-on is one of those features.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section8')">
            8- How does the London Entrepreneurs Network encourage entrepreneurship?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section8')">
          <ul>
            <li>We understand entrepreneurs and what they need to thrive. We give them access to investment, easy communication with other businesses, and professional business advice.</li>
            <li>Our online business platform advertises the best business ideas of our members and offers innovative ways to search for what you want and to then interact with those that can help you achieve your goals.</li>
            <li>We incubate great business ideas that you will see flourish, paying those with the idea and those who invested in or partnered with them in the process.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section9')">
            9- Why should I exhibit at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section9')">
          <ul>
            <li>London Entrepreneurs Network events see the largest gathering of businesses every month in the country. Exhibiting at London Entrepreneurs Network events is the cheapest in the world and offers extraordinary value given the thousands of people you can make contact with.</li>
            <li>All London Entrepreneurs Network exhibitors can give an elevator pitch. This can be expanded all the way to a 4-hour presentation in front of a pre-selected audience of interested prospects for just £3,000.</li>
            <li>FREE refreshments, including beer, tea, coffee, biscuits, and sometimes food and wines, keep exhibitors and visitors within the London Entrepreneurs Network floor space. This means more business can be done as people mingle within our space, and the fact that they are kept in comfort means they stay interacting for longer.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section10')">
            10- How long has the London Entrepreneurs Network been operating?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section10')">
          <p>The London Entrepreneurs Network started operating in 2008 and has experienced rapid growth. In this time, we have helped tens of thousands of entrepreneur and business connections take place.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section11')">
            11- Why does the business network need to select the best offers?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section11')">
          <p>The popularity of our website means that we have a large supply of businesses in certain areas. We believe it is best for the user of our business network to see the best in each field. As our user's interests are the top priority of the London Entrepreneurs Network, we have made it easy to see the current best option available.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section12')">
            12- Why do you ask me to fill out my 'needs' when filling out my profile?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section12')">
          <p>We encourage members of our business networking group to post 'needs'. These are simply things they are looking for and let other users know why they are on our business platform. Members can search through posted needs to see if they can satisfy them. Knowing what people are looking for is a huge advantage for suppliers. Our business model is designed to allow members to find each other and interact with as little effort as possible.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section13')">
            13- How big does the London Entrepreneurs Network plan to become?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section13')">
          <p>We have two goals regarding the future shape of the London Entrepreneurs Network:</p>
          <ul>
            <li>Firstly, we intend to put on the largest business show in the world and hold it regularly in the capital.</li>
            <li>Secondly, we intend to grow our online business platform to become the biggest and best business networking group in the world.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section14')">
            14- Why do we offer a FREE share to all members of our online business platform?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section14')">
          <p>We value every member of our business network and are continually looking for ways to reward investment in us. We believe making members a part of our success is only fair. It is the actions of entrepreneurs, business owners, and investors that have created us, and we find it only fitting that they should be the ones profiting from our growth.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section15')">
            15- Why do we allow members of our business network to advertise for FREE?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section15')">
          <p>We allow members of our business platform to advertise for FREE because we see it as fair and because it fits our business model.</p>
          <p>Allowing members to display advertising for FREE draws new members to our business network and ensures the audience for our members' marketing communications keeps on growing. We benefit from having a thriving business platform that offers a way for entrepreneurs and business owners to make new business connections.</p>
          <p>We believe that focusing on growth, providing desired services, and ensuring long-term benefits for our members is the way forward for our business networking group.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section16')">
            16- How can I advertise at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section16')">
          <p>We offer many ways to advertise at our business shows. We operate workshops, let you give presentations, and put up and hand out marketing material.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section17')">
            17- What makes the London Entrepreneurs Network the best business show in the UK?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section17')">
          <ul>
            <li>The first thing that makes our business shows great is their sheer size. We have over 30,000 members and are growing fast. Our events are the biggest monthly business networking events in the country.</li>
            <li>Secondly, it is the service we offer and how we treat VIP and FREE members that keeps people coming back to our business shows. We take time to learn what you are looking for and help you find it amongst our enormous business network.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section18')">
            18- What makes the London Entrepreneurs Network business shows the best exhibitions for London entrepreneurs?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section18')">
          <p>On our gallery and <a href="https://www.youtube.com/channel/UCo-igWT6C0JB1tB4ANeO7gg">YouTube page</a>, you can see the number and range of businesses that attend our events. As a FREE member or visitor, you will get the opportunity to talk to entrepreneurs, business owners, and investors. If you become a VIP member, you will also receive personal introductions to people selected for their potential to help your business.</p>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section19')">
            19- Why are groups so important to my business development?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section19')">
          <ul>
            <li>Joining small networking business groups inside our larger business platform can be a pivotal moment for an entrepreneur or business. Joining forces with people within your own industry is far more valuable to you than simply being a member of a larger, more general group.</li>
            <li>You will find entrepreneurs and business owners who have faced and overcome any challenges you are facing.</li>
            <li>You will also make important business connections that strengthen your standing in your industry. This can be physical suppliers or contacts that both parties benefit from sharing.</li>
          </ul>
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section20')">
            20- Does the London Entrepreneurs Network allow me to send mass marketing emails to members?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section20')">
          <ul>
            <li>Yes, you can send an email to 10,000 people for just £300 and 30,000 people for only £850. Our emails receive an impressively high 30% open rate and 5% conversion rate.</li>
            <li>You can write your own emails but benefit from the reputation we have built amongst our members for offering lucrative leads to them.</li>
            <li>The London Entrepreneurs Network is an expert in online marketing strategies and marketing communications, allowing our entrepreneurs and business owners to benefit from our expertise.</li>
          </ul>
        </IonRow>


        <!-- FAQ 21 to 40 -->
      <IonRow>
        <div class="title" @click="toggleSection('section21')">
          21- What makes exchanging services and products great for my business?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section21')">
        <p>Exchanging goods and services can eliminate the need for cash transactions. If you have unused products or facilities, turning them into tradeable commodities through our platform can be highly beneficial.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section22')">
          22- How are best offers determined on the London Entrepreneurs Network website?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section22')">
        <p>Best offers are selected based on member satisfaction, the company's ability to maintain high standards, and their reputation for delivering value. Competitive fields like marketing, accountancy, and business advice are key areas of focus.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section23')">
          23- Where can I meet fellow London Entrepreneurs Network members?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section23')">
        <p>Members are free to meet online or in person. Our platform facilitates valuable connections that extend beyond our network, much like other social media platforms.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section24')">
          24- What types of presentations can I give at a London Entrepreneurs Network business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section24')">
        <ul>
          <li>Elevator pitch for £50.</li>
          <li>Up to 30-minute presentation for £500, including audience contact details and promotion.</li>
          <li>4-hour workshop for £1,000 with a pre-selected audience of 30 to 200 members.</li>
        </ul>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section25')">
          25- How are best offers awarded on the London Entrepreneurs Network website?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section25')">
        <p>Best offers are awarded based on member feedback, company scale, and the ability to replicate success. We prioritize meeting future customers' needs effectively.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section26')">
          26- What types of business connections can I find?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section26')">
        <p>You can find suppliers, potential partners, or collaborators among our 30,000+ members.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section27')">
          27- When will I receive an offer of a formal share in the London Entrepreneurs Network?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section27')">
        <p>A formal share offer is made as soon as your profile is complete. You can choose to accept or decline.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section28')">
          28- How do I apply for best offer status on the London Entrepreneurs Network's website?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section28')">
        <p>Apply through our <a href="http://www.londonentrepreneursnetwork.com/BizOfferNeedPage">best offer</a> section. Achieving best offer status increases visibility and attracts more customers.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section29')">
          29- How many London businesses will see my advert?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section29')">
        <p>With over 30,000 members and thousands of weekly visitors, your advert will gain significant exposure, especially if targeting other businesses.Adverts are placed prominently on the left and right-hand sides or at the top of business listings. The London Entrepreneurs Network is an especially good business platform to sell on if your typical customer is another business.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section30')">
          30- What is the dress code at a London Entrepreneurs Network business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section30')">
        <p>There is no formal dress code. Dress in a manner that suits your sector and the impression you wish to make. Most opt for business attire.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section31')">
          31- How many offers can I post for FREE on the London Entrepreneurs Network website?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section31')">
        <p>There is no limit to the number of free offers you can post. We promise that posting offers will always be free.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section32')">
          32- How many London businesses will see my advert?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section32')">
        <p>Similar to Section 29: Over 30,000 members and many thousands of visitors will see your advert, prominently placed on our website.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section33')">
          33- What is the dress code at a London Entrepreneurs Network business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section33')">
        <p>There is no formal dress code. Dress in a manner that suits your sector and the impression you wish to make. Most opt for business attire.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section34')">
          34- What can I post as an offer?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section34')">
        <p>We are committed to growing our business network as it becomes stronger the more people join. Offering a service that people can no longer find elsewhere is a great way to generate interest in someone becoming a member of the London Entrepreneurs Network.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section35')">
          35- What is the current makeup of the London Entrepreneurs Network?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section35')">
        <p>Our network comprises 60% startups, 20% small to medium-sized businesses, 10% pre-startups, and 5% investors. We offer detailed information on members and have a strong focus on business-to-business connections.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section36')">
          36- How can I ensure my business advert appears above others?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section36')">
        <p>For £10,000, you can place a video advert at the top of our pages. This option provides significant exposure on one of the fastest-growing business platforms.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section37')">
          37- How can I benefit from the business knowledge of the London Entrepreneurs Network and its members?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section37')">
        <ul>
          <li>Get professional advice from our founder, Reza Soheily, starting at £70 per hour. For £2,000, access data and leads worth £10,000.</li>
          <li>Contact experienced business owners or attend one of our shows for insights.</li>
          <li>Start a group to ask questions and receive answers from the platform's community or staff.</li>
        </ul>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section38')">
          38- When does bartering services and products make sense?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section38')">
        <p>Bartering makes sense when you have unused resources. Our platform allows you to turn these into tradeable commodities & services, avoiding the need for cash transactions.</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section39')">
          39- What should I bring to a London Entrepreneurs Network business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section39')">
        <p>Bring marketing materials, an electronic device, and any presentation materials. Dress in professional attire to make a strong impression. You are free to hand them out to anyone you meet. You may wish to take an electronic device or a pad of paper that you can use to make notes in. This is so that you can make the most out of conversations you have and so that you can continue them either online or in person later</p>
      </IonRow>

      <IonRow>
        <div class="title" @click="toggleSection('section40')">
          40- How long is a London Entrepreneurs Network business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section40')">
        <p>Business shows vary in length, typically ranging from 2 to 4 hours. Check the specific event details for accurate timing.</p>
      </IonRow>





        <!-- FAQ 41 to 60 -->
      <IonRow>
        <div class="title" @click="toggleSection('section41')">
          41- What makes the London Entrepreneurs Network the top online platform for business networking?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section41')">
        <p>Our platform offers many groundbreaking and unique features, most of which are available for free. Everything is purpose-built to help businesses and entrepreneurs find exactly what they need, setting us apart as the premier networking platform.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section42')">
          42- How can I filter members by data such as user type, income, or number of employees?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section42')">
        <p>Filtering members is straightforward. Use the data filters provided on the left side of our business listings pages to select categories like company size, income, or connections.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section43')">
          43- What do I need to sign up for the London Entrepreneurs Network?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section43')">
        <p>To join, simply provide an email address and create a password. You will receive a confirmation email immediately after registration.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section44')">
          44- Why is the London Entrepreneurs Network the best social media platform for advertising?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section44')">
        <ul>
          <li>Firstly, we offer free advertising forever, attracting both new and regular companies.This means a tremendous amount of both new and regular companies using the service every month.</li>
          <li>Secondly, we provide plenty of <a href="http://www.londonentrepreneursnetwork.com/adverts">paid options</a> that will increase your reach and the return you receive.</li>
          <li>Our business model provides comprehensive networking solutions at minimal cost, often surpassing competitors' paid options.Many of our FREE services offer greater capabilities than our competitors paid options.</li>
        </ul>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section45')">
          45- How can I be sure that the advice I receive will benefit my business?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section45')">
        <p>Business development is a cornerstone of London Entrepreneurs Network. Led by a successful entrepreneur, our team provides experienced advice for businesses of all sizes.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section46')">
          46- What can I post on the London Entrepreneurs Network feed?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section46')">
        <p>You can post various types of content, including pictures, marketing materials, and questions. The feed serves as both a business and social platform, allowing for meaningful engagement with members and visitors. The London Entrepreneurs Network is a business platform and a social platform, we have developed a website where both elements complement each other and a user generated news feed is just one example of this.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section47')">
          47- How do I get my business listed on the London Entrepreneurs Network?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section47')">
        <p>Creating a free account will list your business in our directory. A complete profile will improve your visibility and enhance your business’s credibility. Trust is built through detailed information.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section48')">
          48- How can I place my business at the top of the London Entrepreneurs Network directory?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section48')">
        <p>Profile visibility is influenced by completeness. To achieve top placement, consider becoming a VIP or VVIP member. Regular updates, side advertisements, and active connections also enhance your profile.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section49')">
          49- How can I get an idea of what to expect at a London Entrepreneurs Network business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section49')">
        <ul>
          <li>View images from past shows in our gallery.</li>
          <li>Watch videos of previous events on our <a href="https://www.youtube.com/channel/UCo-igWT6C0JB1tB4ANeO7gg">YouTube channel</a> for speaker highlights and testimonials.</li>
        </ul>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section50')">
          50- How does the London Entrepreneurs Network maintain the best exhibitions in the capital?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section50')">
        <ul>
          <li>We ensure satisfaction for both exhibitors and visitors through meticulous planning and effort and  receive what they want.</li>
          <li>We offer the largest monthly business shows in London with free advertising and refreshments to ensure attendees focus on the event & their objects.We also offer VIP members personalised introductions to those interested in buying or investing in their company.</li>
          <li>We also make sure our investors are happy by continuing to offer up an exciting range of companies looking for £50,000 or more in finance. We highlight the work our investors do in our TV series Angels Investment Show.</li>
          <li>VIP members receive personalized introductions, and investors benefit from access to companies seeking significant funding.</li>
          <li>We value every member and use their feedback to continually improve our events.</li>
          <li>Entrepreneurs, businesses and investors keep on returning to our shows which we take as the best indication of how well we are performing.</li>
        </ul>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section51')">
          51- What can I contact the London Entrepreneurs Network about?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section51')">
        <p>Feel free to reach out with any questions. We respond to email inquiries within 48 hours.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section52')">
          52- I’m interested in partnering or sponsoring the London Entrepreneurs Network. What options are available?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section52')">
        <ul>
          <li>We offer flexible partnership and sponsorship opportunities. </li>
          <li>You can organize a 30-minute presentation for £500, including promotion and attendee contact details. </li>
          <li>For a prime advertising space on our Meetup groups, consider a logo placement for £250 per month.</li>
        </ul>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section53')">
          53- What benefits come from seeing who is exhibiting at a business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section53')">
        <p>Viewing the exhibitor profiles on our floor plan helps visitors plan their day and find specific businesses or individuals of interest.Seeing that a particular business or individual is exhibiting can give you a reason to attend.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section54')">
          54- How can I book a spot at an upcoming business show on the London Entrepreneurs Network website?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section54')">
        <p>Use our <a href="http://www.londonentrepreneursnetwork.com/EventsShowsPage">drag-and-drop floor plan</a> to select and book your spot. Simply choose your location, pay the displayed price, and your profile picture will appear in the selected area.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section55')">
          55- How much does it cost to exhibit at a London Entrepreneurs Network event?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section55')">
        <ul>
          <li>Exhibition costs start from £50. For this, you receive a 1x1m table, unlimited space, electricity, internet access, and refreshments.We are proud to always offer the lowest exhibition costs in the world.</li>
          <li>Advertising at your stand and distributing marketing materials is allowed. Presentations for £300-£500 include 2 weeks advance promotional support and 2 weeks advanced marketing.</li>
        </ul>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section56')">
          56- Can I start a group from the business network feed?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section56')">
        <p>Yes, you can initiate or join groups and discussions through the business network feed. Connect with like-minded individuals and extend your conversations to our networking groups.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section57')">
          57- How can I see who is exhibiting at the next London Entrepreneurs Network business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section57')">
        <p>Check our <a href="http://www.londonentrepreneursnetwork.com/exhibiting">drag-and-drop floor plan</a> to view profiles of confirmed exhibitors and their locations. You can also register for workshops and see a diverse range of FREE exhibitions.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section58')">
          58- What should I expect when visiting a London Entrepreneurs Network business show?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section58')">
        <p>Expect to meet numerous exhibitors in the main area. Workshops and presentations will be held in adjacent rooms, with speeches from our founder, sponsors, and partners.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section59')">
          59- How does the London Entrepreneurs Network earn from member investments?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section59')">
        <p>We make money when you do. We get an up to 7% success fee when you successfully acquire investment for your business. Unlike other investment platforms, we never charge just for an introduction.</p>
      </IonRow>
      <IonRow>
        <div class="title" @click="toggleSection('section60')">
          60- How does the London Entrepreneurs Network compare to other social platforms?
        </div>
      </IonRow>
      <IonRow class="description" v-if="isSectionVisible('section60')">
        <p>We combine the best features of popular social platforms like Facebook and Twitter, tailored for business use. We offer more flexibility and free advertising compared to competitors like LinkedIn and Gumtree.com.</p>
      </IonRow>




        <!-- FAQ 61 to  -->
        <IonRow>
          <div class="title" @click="toggleSection('section61')">
            61- As an entrepreneur, how can I start attracting investment and business partners?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section61')">
          <ul>
            <li>The first step to attracting business investment is to create your profile. You should state what you offer and what you are looking for from others. This information is extremely valuable for you as it sets you up to receive and provide goods and services.</li>
            <li>You can meet with investors or fill out our simple <a href="http://www.londonentrepreneursnetwork.com/apply-for-investment">form</a> to apply for investment.</li>
          </ul>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section62')">
            62- How do I manage which groups I am a member of?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section62')">
          <p>Simply click on 'my account' and then 'my groups' from the list on the left-hand side of the page. Anyone can create or join a group. Making small business networking groups is a great way to get the most out of your time. What you discuss and the business transactions already taking place will be a match to what you need. Getting together with other companies in your sector can improve every aspect of how you do business. Making business connections is vital for the health of your company and the more relevant they are to you, the better.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section63')">
            63- How do I apply for investment in my business?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section63')">
          <ul>
            <li>You can fill out our <a href="http://www.londonentrepreneursnetwork.com/apply-for-investment">form</a> requesting investment or meet physically or online with an investor. The London Entrepreneurs Network has many investors willing to invest £50,000 or more. The London Entrepreneurs Network itself also offers the service of giving investment and loans.</li>
            <li>The best advice for you to follow is to apply online and attend a business show. This way you get to put down all the explanatory data behind why you think you could grow with help and you are then prepared to meet face-to-face.</li>
          </ul>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section64')">
            64- How much money are investors looking to inject into the best business ideas?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section64')">
          <p>Our investors are looking to put £50,000 or more into the best business ideas they can find. They regularly search our online business platform and attend our business shows. Raising capital is no problem for an organisation as large and prosperous as the London Entrepreneurs Network, we simply need to know a little about your business. Our investors are experienced and can spot promising business ideas and help scale them up to maximise profits for both entrepreneurs or business owners and themselves.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section65')">
            65- I'm a small business owner, how do I go about proving my business idea is viable?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section65')">
          <p>Simply go through our <a href="http://www.londonentrepreneursnetwork.com/apply-for-investment">form</a> to show us how your business has performed so far. We ask for the last 6 months of your personal bank statements and the last 3 years of business trading bank statements to get an idea of your companies value. We provide room however for you to explain your business model so if you have not been trading for that long or feel your statements do not truly reflect the value of your company you can explain in the form provided.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section66')">
            66- Is the London Entrepreneurs Network an active investor in companies?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section66')">
          <p>Yes, the London Entrepreneurs Network do invest in businesses and you can apply directly to us at the same time you apply to others. This is done through our <a href="http://www.londonentrepreneursnetwork.com/apply-for-investment">simple form</a> or in personal interactions.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section67')">
            67- How many needs can I post for FREE on the London Entrepreneurs Network business platform?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section67')">
          <p>You can post an unlimited number of needs all for FREE. We have made a promise to our members that this facility to post needs for FREE will remain for ever.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section68')">
            68- How would my business go about valuing my assets for a services and products exchange?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section68')">
          <p>Put simply, it is up to you to agree a price. Nothing will go through our business platform without your explicit permission. Prices may be the same as your cash price or you may end up benefiting from lowering your price slightly to make sure your asset does not go to waste. Either way it will only be carried out as a better alternative to letting your asset go unused.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section69')">
            69- How much does it cost to sign up?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section69')">
          <p>Signing up to the London Entrepreneurs Network is completely FREE. You receive many features most business networks charge at absolutely no cost for ever. A FREE member has access to posting needs and offers, posting on our feed and all other areas of our website including starting and joining smaller, internal business networking groups within our larger business network.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section70')">
            70- What can I do with my share in the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section70')">
          <p>You are free to sell it immediately or keep it in order to profit from our continued growth. The London Entrepreneurs Network is well on its way to becoming the organiser of the largest and best business shows in the world and wants you to share in its success. As a member of our online business platform, we will offer you preferential treatment should you want to buy more shares in our company.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section71')">
            71- How much is VIP and VVIP membership to the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section71')">
          <p>VIP membership costs as little as £18 per month. For this you receive many features that will help in your business development. VVIP membership costs just £178 per month and gives you access to even more amazing features. Both VIP and VVIP members receive priority treatment and personal introductions at our networking events.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section72')">
            72- Can I display my business logo with the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section72')">
          <p>Yes, we can place your logo prominently at our meetup events. All 30,000 plus members of the business network plus thousands of other visitors will see your logo for just £250 for a full month.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section73')">
            73- How can I sponsor the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section73')">
          <p>You can choose to sponsor us for 3, 6 or 12 months from as little as £3,000. For this you will receive a FREE exhibition stand at our business shows, your company logo displayed for FREE at our meetup groups, the ability to send unlimited emails to 20 selected members of our business network, the chance to put on a 5 to 10 minute presentation and 30 minute workshop and the contact details of everyone registered to attend.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section74')">
            74- Is it possible to co-organise a business show in London?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section74')">
          <p>Yes. For just £1,000 you can co-organise a business show with the London Entrepreneurs Network. We are extremely flexible when it comes to partnering or co-organising and the more you wish to pay, the greater the stake you have in the business network event.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section75')">
            75- How much does it cost to become a VIP member on the London Entrepreneurs Network's online business platform?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section75')">
          <p>VIP membership starts from as little as £18 per month and gives you access to many features perfect for entrepreneurs, small businesses and established companies. You will receive benefits both online and at our events. We will help you make business connections that will continue to pay off for years to come. You will receive lucrative leads to follow up on via our website and in person.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section76')">
            76- How much does VVIP membership of the London Entrepreneurs Network cost?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section76')">
          <p>VVIP membership starts at as little as £178 per month. For this you receive absolute priority treatment and access to £1,000s of business data and personal introductions to pre-selected parties.</p>
          <p>VIP members also have the opportunity to send an unlimited number of emails to 20 people a month but VVIP members can target exactly who these 20 people are to make the most out of their self-promotion.</p>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section77')">
            77- What benefits do VVIP members of the London Entrepreneurs Network receive?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section77')">
          <p>There are many benefits that VVIP members receive outlined on our <a href="http://www.londonentrepreneursnetwork.com/vip-membership">VIP and VVIP membership page</a>.</p>
          <ul>
            <li>You receive access to all our members' needs. This is highly valuable and prized by our members. The true worth of this depends on how your business uses the information and the size of your company but can reach into the millions of pounds. We will help your business development with expert advice geared specifically to your business.</li>
            <li>You will always be the first to be informed of opportunities when they arise. Everything about the London Entrepreneurs Network helps foster profitable business connections that will continue to provide you with a profit long into the future.</li>
          </ul>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section78')">
            78- What benefits will I receive at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section78')">
          <li>You will be able to access an exclusive VIP area at all our business shows. In this area you can interact with other VIP members and enjoy the VIP refreshment.</li>
          <li>You will also receive personal introductions to selected people that will improve your business connections.</li>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section79')">
            79- What benefits will I receive on the London Entrepreneurs Network online business platform?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section79')">
          <ul>
            <li>VIP and VVIP members profiles are placed above others in our list of businesses. This means that they are easier to find and more likely to receive interest from other members. If one of your main goals is to work with other entrepreneurs or supply businesses, this can be extremely valuable.</li>
            <li>Our online business platform offers many businesses to sell to or partner with. You can send unlimited emails to 20 people a month and are always a priority of our staff. They look through the business platform looking for matches to your needs and offers. Our staff have access to all the data on our members including the needs they fill out on their profile. We can inform you whenever an opportunity arises putting you in the best position to profit from it.</li>
          </ul>
        </IonRow>
        <IonRow>
          <div class="title" @click="toggleSection('section80')">
            80- What can I expect at a London Entrepreneurs Network business show?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section80')">
          <p>Our online business platform offers many businesses to sell to or partner with. You can send unlimited emails to 20 people a month and are always a priority of our staff. They look through the business platform looking for matches to your needs and offers. Our staff have access to all the data on our members including the needs they fill out on their profile. We can inform you whenever an opportunity arises putting you in the best position to profit from it.</p>
        </IonRow>



      </div>
    </IonRow>
  </IonGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonTitle, IonItem, IonCheckbox, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FAQComponent',
  components: {
    IonItem,
    IonCheckbox,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonTitle,
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
      section75: false,
      section76: false,
      section77: false,
      section78: false,
      section79: false,
      section80: false,

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
  .TopTitle {
    font-weight: bold;
    font-size: 25px;
    margin: 10px 0;
    text-align: center;
  }
 .faq-container {
    margin: 20px 0;
  }

  .title {
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .description {
    padding: 10px;
    /* background-color: #fafafa; */
  }
</style>

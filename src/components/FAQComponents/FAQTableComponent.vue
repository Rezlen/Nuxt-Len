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
          Posting an offer on the London Entrepreneurs Network is FREE and targeted advertising. It is searchable so you know that any member looking for what you offer will be able to find you as easily as possible. Marketing online does not get simpler or more effective.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section2')">
            2- How can I contact the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section2')">
          You can contact us through our contact form on the website, by email at support@londonentrepreneursnetwork.co.uk, or by phone at +44 123 456 789.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section3')">
            3- What are the benefits of becoming a member?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section3')">
          As a member, you gain access to exclusive events, networking opportunities, and discounts on services. Membership also provides visibility within our network and access to member-only resources.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section4')">
            4- How can I become a member of the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section4')">
          You can become a member by filling out our online registration form and paying the membership fee. Visit our membership page for more details and to sign up.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section5')">
            5- Are there any membership fees?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section5')">
          Yes, we have various membership tiers, each with different benefits and associated fees. Check our membership page for detailed pricing information.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section6')">
            6- How do I reset my password?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section6')">
          To reset your password, go to the login page and click on "Forgot Password." Follow the instructions to reset your password via email.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section7')">
            7- Can I update my membership details?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section7')">
          Yes, you can update your membership details by logging into your account and going to the profile settings page. Make any necessary changes and save them.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section8')">
            8- How can I cancel my membership?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section8')">
          To cancel your membership, contact our support team via email or through our contact form. We will assist you with the cancellation process.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section9')">
            9- What types of events does the network organize?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section9')">
          We organize a variety of events including networking meetups, workshops, seminars, and industry conferences. Check our events calendar for upcoming events.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section10')">
            10- How can I submit an event to be featured on the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section10')">
          To submit an event, use our event submission form on the website. Include all relevant details, and our team will review and feature your event if it meets our criteria.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section11')">
            11- Can I advertise my business on the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section11')">
          Yes, we offer advertising opportunities including banner ads and featured listings. Contact us for more information on how to advertise your business.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section12')">
            12- How do I become a sponsor?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section12')">
          To become a sponsor, reach out to us via our sponsorship page or contact form. We offer various sponsorship packages depending on your needs and budget.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section13')">
            13- Can I collaborate with other members?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section13')">
          Yes, our network encourages collaboration between members. You can connect with others through our events, forums, and networking opportunities.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section14')">
            14- How can I access member-only resources?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section14')">
          Member-only resources are accessible through the members' area of our website. You will need to log in with your membership credentials to access these resources.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section15')">
            15- What is the process for submitting a business offer?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section15')">
          To submit a business offer, use the offer submission form on our website. Provide all relevant details about your offer, and our team will review and post it accordingly.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section16')">
            16- How do I update my business offer?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section16')">
          To update your business offer, log in to your account, go to the offers section, and edit the details of your existing offer. Save the changes to update the offer.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section17')">
            17- Can I delete my business offer?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section17')">
          Yes, you can delete your business offer by logging into your account and accessing the offers section. Select the offer you wish to delete and choose the delete option.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section18')">
            18- How can I provide feedback on the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section18')">
          You can provide feedback through our contact form or by emailing us directly. We value your feedback and use it to improve our services.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section19')">
            19- What should I do if I encounter issues with the website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section19')">
          If you encounter any issues with the website, please contact our support team through the contact form or email us at support@londonentrepreneursnetwork.co.uk.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section20')">
            20- Can I update my contact information?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section20')">
          Yes, you can update your contact information by logging into your account and going to the profile settings page. Update your details and save the changes.
        </IonRow>

        <!-- FAQ 21 to 40 -->
        <IonRow>
          <div class="title" @click="toggleSection('section21')">
            21- How do I update my profile on the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section21')">
          To update your profile, log in to your account and go to the profile settings page. From there, you can edit your details and save the changes.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section22')">
            22- Can I advertise my business on the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section22')">
          Yes, you can advertise your business. We offer various advertising options including featured listings and banner ads. Please contact us for more information.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section23')">
            23- How can I join the network’s online community?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section23')">
          You can join our online community by signing up through our website. Once registered, you will have access to our forums, discussion groups, and member directory.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section24')">
            24- Are there any discounts available for membership?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section24')">
          Occasionally, we offer discounts and promotional rates for membership. Check our website or subscribe to our newsletter to stay informed about any current offers.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section25')">
            25- Can I participate in multiple networking events?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section25')">
          Yes, as a member, you can participate in as many networking events as you like. Check our events calendar for the schedule and register for the events that interest you.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section26')">
            26- How do I become a guest speaker at an event?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section26')">
          To become a guest speaker, contact us through our speaker submission form or email us directly. Provide your background information and the topic you wish to speak about.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section27')">
            27- What are the criteria for featured listings?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section27')">
          Featured listings are selected based on relevance, quality, and the level of engagement. For more details on how to qualify for a featured listing, contact us directly.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section28')">
            28- Can I request a specific type of event to be organized?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section28')">
          Yes, you can request specific types of events by contacting us with your suggestions. We will consider your request and try to incorporate it into our event planning.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section29')">
            29- How often are new offers posted on the website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section29')">
          New offers are posted regularly. We encourage members to check back frequently for the latest updates and to make the most of the opportunities available.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section30')">
            30- How can I become a volunteer for the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section30')">
          To become a volunteer, fill out our volunteer application form on the website. We will review your application and get in touch with you about available opportunities.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section31')">
            31- Can I promote my personal blog through the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section31')">
          Yes, you can promote your personal blog by sharing it through our community forums or including it in your profile if it aligns with our network’s goals and interests.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section32')">
            32- Are there any restrictions on the type of business offers I can post?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section32')">
          Business offers must comply with our guidelines and should be relevant to our community. We do not accept offers that violate our terms of service or are deemed inappropriate.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section33')">
            33- How do I provide content for the network’s blog or newsletter?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section33')">
          To contribute content, contact us with your article or content proposal. Our editorial team will review it and provide guidelines for submission.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section34')">
            34- What should I do if I encounter inappropriate content on the site?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section34')">
          Report any inappropriate content to us using the report feature or by contacting our support team. We will review the report and take appropriate action.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section35')">
            35- Can I share my membership benefits with others?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section35')">
          Membership benefits are intended for the use of the member only. Sharing benefits with others may be against our terms of service. Please review our policies for more information.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section36')">
            36- How do I renew my membership?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section36')">
          Membership renewal can be done through your account on our website. Navigate to the membership section and follow the prompts to renew your membership.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section37')">
            37- Are there any member-only discounts on services?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section37')">
          Yes, we offer various discounts on services exclusively for members. Check the members' area of our website or contact us for details on available discounts.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section38')">
            38- How can I feature my business in the network’s directory?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section38')">
          To feature your business in the directory, contact us to learn about the options available. We offer various levels of listing visibility and promotions.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section39')">
            39- What types of networking opportunities are available?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section39')">
          We offer a range of networking opportunities including industry-specific events, general meetups, online forums, and special interest groups.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section40')">
            40- Can I suggest new features for the website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section40')">
          Yes, we welcome suggestions for new features. Please send your ideas through our contact form or email us directly, and we will consider them for future updates.
        </IonRow>

        <!-- FAQ 41 to 60 -->
        <IonRow>
          <div class="title" @click="toggleSection('section41')">
            41- What is the process for submitting an event to the London Entrepreneurs Network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section41')">
          To submit an event, use our event submission form available on the website. Provide all the necessary details, and our team will review it for inclusion in our events calendar.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section42')">
            42- How can I get involved in the network’s initiatives?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section42')">
          To get involved, consider joining our volunteer program or participating in our events. You can also contribute ideas and feedback to help shape our initiatives.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section43')">
            43- What types of businesses are featured on the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section43')">
          We feature a diverse range of businesses including startups, established companies, and service providers from various industries.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section44')">
            44- How can I find a mentor through the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section44')">
          You can find a mentor by participating in our networking events, joining our mentorship programs, or reaching out through our online community forums.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section45')">
            45- Can I promote a job vacancy on the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section45')">
          Yes, job vacancies can be promoted through our job board or by contacting us for more information on how to feature your vacancy.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section46')">
            46- How can I access the network’s training programs?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section46')">
          Access our training programs by signing up through our website. We offer various workshops and courses that you can register for once you become a member.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section47')">
            47- What are the benefits of attending networking events?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section47')">
          Attending networking events provides opportunities to connect with other entrepreneurs, learn from industry experts, and expand your professional network.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section48')">
            48- Can I host my own event through the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section48')">
          Yes, you can host your own event by contacting us to discuss the details and requirements. We will assist you with the process and promote your event through our channels.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section49')">
            49- How can I contribute to the network’s blog?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section49')">
          To contribute to our blog, submit your article or blog post through our submission form or by contacting our editorial team with your proposal.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section50')">
            50- Are there any volunteer opportunities available?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section50')">
          Yes, we have various volunteer opportunities available. Visit our volunteer page to apply and get involved with our community.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section51')">
            51- How can I make a donation to the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section51')">
          Donations can be made through our donation page on the website. We appreciate your support and contributions to our mission.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section52')">
            52- Can I offer my services for free to other members?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section52')">
          Yes, you can offer your services for free to other members. Share your offer through our platform to make it visible to the network.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section53')">
            53- How do I provide a testimonial for the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section53')">
          To provide a testimonial, use our testimonial submission form or email us with your feedback and experiences. We value your input and may feature it on our website.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section54')">
            54- What is the process for becoming a partner organization?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section54')">
          To become a partner organization, contact us to discuss partnership opportunities. We will review your proposal and provide details on how to proceed.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section55')">
            55- Can I feature my success story on the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section55')">
          Yes, we encourage members to share their success stories. Submit your story through our submission form or contact us for more information on how to feature it.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section56')">
            56- How can I participate in the network’s research projects?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section56')">
          To participate in research projects, express your interest by contacting us. We will provide details on ongoing projects and how you can get involved.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section57')">
            57- What should I do if I forget my account username?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section57')">
          If you forget your username, use the "Forgot Username" feature on the login page. Follow the instructions to retrieve your username via email.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section58')">
            58- Can I access the network’s resources from mobile devices?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section58')">
          Yes, our website and resources are mobile-friendly and can be accessed from smartphones and tablets. Ensure you have a stable internet connection for the best experience.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section59')">
            59- How do I update my billing information?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section59')">
          To update your billing information, log in to your account and navigate to the billing section. Update your details and save the changes.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section60')">
            60- Can I use my membership benefits at partner locations?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section60')">
          Yes, some membership benefits may be applicable at partner locations. Check our website or contact us for a list of partners and available discounts.
        </IonRow>

        <!-- FAQ 61 to 74 -->
        <IonRow>
          <div class="title" @click="toggleSection('section61')">
            61- What are the different membership levels available?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section61')">
          We offer various membership levels, each with different benefits and pricing. Visit our membership page for details on the available levels and their features.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section62')">
            62- How do I apply for a grant through the network?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section62')">
          To apply for a grant, review the grant criteria on our website and submit your application through the designated form. We will evaluate your application based on the guidelines provided.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section63')">
            63- Can I receive a certificate of participation for events?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section63')">
          Yes, certificates of participation are available for certain events. Contact us after the event to request your certificate if it is offered.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section64')">
            64- How do I get a copy of the network’s annual report?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section64')">
          The annual report is available on our website. Visit the "Reports" section to download the latest report or contact us for a physical copy.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section65')">
            65- What should I do if I suspect fraud or misconduct?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section65')">
          Report any suspicions of fraud or misconduct to us immediately through our support channels. We take such matters seriously and will investigate accordingly.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section66')">
            66- How do I access member-only content?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section66')">
          Member-only content can be accessed by logging in to your account and navigating to the members' area of our website. Ensure your membership is active to view this content.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section67')">
            67- Can I update my contact preferences for notifications?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section67')">
          Yes, you can update your contact preferences for notifications in your account settings. Choose how you would like to receive updates and adjust your preferences as needed.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section68')">
            68- How do I submit feedback about the website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section68')">
          Submit feedback through our contact form or email us directly. We value your input and use it to improve our website and services.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section69')">
            69- Can I see a list of upcoming events?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section69')">
          Yes, you can view a list of upcoming events on our events calendar available on our website. Stay updated on the latest events and register to participate.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section70')">
            70- How do I report a technical issue on the website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section70')">
          Report technical issues by contacting our support team or using the support form on our website. Provide details about the issue, and we will address it promptly.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section71')">
            71- Can I get assistance with using the website?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section71')">
          Yes, assistance is available through our support team. Contact us with any questions or difficulties you have, and we will help you navigate the website.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section72')">
            72- How can I reach out to other members?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section72')">
          Reach out to other members through our community forums, direct messaging system, or by attending our networking events.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section73')">
            73- What is the policy on content submissions?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section73')">
          Content submissions should adhere to our guidelines and be relevant to our community. We review all submissions and reserve the right to accept or reject content.
        </IonRow>

        <IonRow>
          <div class="title" @click="toggleSection('section74')">
            74- How do I contact the network for further inquiries?
          </div>
        </IonRow>
        <IonRow class="description" v-if="isSectionVisible('section74')">
          For further inquiries, use our contact form on the website or email us directly. We will respond to your questions as quickly as possible.
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

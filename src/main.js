import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded!");

  if (typeof Swiper === "undefined") {
      console.error("Swiper library is missing!");
      return;
  }

  var swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      grabCursor: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet"></span>`;
          },
      },
  });

  console.log("Swiper initialized successfully!");
});

// Modal Home Page
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[x-cloak]").forEach(el => el.style.display = "none");
});

function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('counter-btn');
  if (counterElement) {
    setupCounter(counterElement);
  }
});

// FAQs
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".faq-btn");

  buttons.forEach((button) => {
      button.addEventListener("click", function () {
          const answer = this.nextElementSibling;
          const icon = this.querySelector(".faq-icon");

          document.querySelectorAll(".faq-answer").forEach((ans) => {
              if (ans !== answer) {
                  ans.classList.add("hidden");
                  ans.previousElementSibling.querySelector(".faq-icon").classList.remove("fa-chevron-up");
                  ans.previousElementSibling.querySelector(".faq-icon").classList.add("fa-chevron-down");
              }
          });

          if (answer.classList.contains("hidden")) {
              answer.classList.remove("hidden");
              icon.classList.remove("fa-chevron-down");
              icon.classList.add("fa-chevron-up");
          } else {
              answer.classList.add("hidden");
              icon.classList.remove("fa-chevron-up");
              icon.classList.add("fa-chevron-down");
          }
      });
  });
});

//Nav bar drop down menu
document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const chevronIcon = document.getElementById("chevronIcon");

    dropdownButton.addEventListener("mouseenter", () => {
        dropdownMenu.classList.remove("hidden");
        chevronIcon.classList.add("rotate-90");
    });

    dropdownButton.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!dropdownMenu.matches(":hover")) {
                dropdownMenu.classList.add("hidden");
                chevronIcon.classList.remove("rotate-180");
            }
        }, 200);
    });

    dropdownMenu.addEventListener("mouseleave", () => {
        dropdownMenu.classList.add("hidden");
        chevronIcon.classList.remove("rotate-90");
    });
});

//News and Events
document.addEventListener("DOMContentLoaded", function () {
  const events = [
    {
        title: "Official Result of DFAMPC Election",
        date: "April 2, 2025",
        image: "DFAMPC Assets/latest.webp",
        description: `The Election Committee is pleased to announce the result of the DFAMPC
        Elections held from 25 to 28 March 2025 in the Foreign Service Posts,
        DFA Home Office, DFA OCA Aseana, Consular Offices, and Satellite Offices.<br><br>
        Done this 2nd day of April 2025, in Pasay City, Philippines`
    },
    {
        title: "An invitation to the community of DoubleDragon Tower!",
        date: "March 20, 2025",
        image: "DFAMPC Assets/upcoming1.webp",
        description: `An invitation to the community of DoubleDragon Tower!<br>
            WHAT: Free Zumba classes, twice a week<br>
            WHEN: Tuesdays and Thursdays at 5:30 pm<br>
            WHERE: Mess Hall, 6th floor, DoubleDragon Tower`
    },
      {
          title: "1st Year Zumba Class Anniversary",
          date: "March 20, 2025",
          image: "DFAMPC Assets/zumba1.webp",
          description: `Get Ready to move, groove, and celebrate!<br><br>
          DFA Multipurpose Cooperative (DFAMPC) is pleased to invite the community to the 1st Year
          Anniversary Celebration of DFA Multipurpose- Cooperative Zumba Class - a fun-filled evening
          dedicated to camaraderie, dedication, fitness and high-energy dance workout. This milestone
          marks a year of enthusiasm, dedication, and the DFAMPC's commitment to a healthier and
          more active lifestyle for its stakeholders.<br><br>
          The details of the event are as follows:<br>
          Date: March 20, 2025<br>
          Time: 5:00 pm - 7:00 pm<br>
          Venue: 6th floor, Mess Hall, Double Dragon Tower, Meridian Park, Pasay City<br><br>
          During the event, we will be recognizing outstanding participants in the following categories:<br>
          - Most Active Participants<br>
          - Most Energetic<br>
          - Best Zumba Outfit<br><br>
          To add more energy and vibrancy to the celebration, all participants are encouraged to wear
          colorful and best Zumba outfits, and other surprises.<br><br>
          We hope to see you there. Save the date!`
      },
      {
          title: "End of Campaign Period",
          date: "March 12, 2025",
          image: "DFAMPC Assets/no-image.webp",
          description: `The Election Committee officially announces that the campaign period will conclude today, 12
            March 2024. No further campaigning, posting, or vote solicitation will be allowed. Additionally,
            please ensure that all social media posts are removed.<br><br>
            All candidates are required to comply with the election guidelines set by the cooperative.<br><br>
            Lastly, we would like to express our gratitude to all candidates and members who participated in
            this election process. We wish for a successful DFAMPC election for the year 2025.`
                },
      {
          title: "MOA Signing for Online Passport Appointment",
          date: "March 8, 2025",
          image: "DFAMPC Assets/past2.webp",
          description: `The Department of Foreign Affairs Multi-purpose Cooperative (DFAMPC) and FSI Skyward
            Logistics, Inc, signed a Memorandum of Agreement (MOA) for Online Passport Appointment
            System.<br><br>
            Signed by the Chairperson Richard T. Billedo for DFAMPC and Mr. Rex C. Latuño, President
            and Chief Executive Officer of Skyward, the MOA signifies the partnership between the two
            parties to provide a better solution to address and restore the need for an efficient, accurate,
            and fast delivery service for the Office of Consular Affairs' passport applicants.<br><br>
            Furthermore, the partnership aims to improve not only the delivery of passports, but also other
            consular documents i.e. apostille documents, records verification, etc. by utilizing the technical
            expertise of Skyward to develop and host the required platform that can integrate courier
            management, distribution and delivery tracking.<br><br>
            FSI Skyward Logistics, Inc. is a corporation in the Philippines engaged in the business of
            developing and providing technology integration services, platforms, programming, software
            engineering, hardware integrations and other information systems.`
      },
      {
          title: "Oath-taking Ceremony for the Health and Wellness and Mediation System",
          date: "March 8,2025",
          image: "DFAMPC Assets/past3.webp",
          description: `The department of Foreign Affairs Multi-Purpose Cooperative (DFAMPC), through its
            Chairperson Richard T. Billedo officiated the oath-taking ceremony of three (3) new members of
            the Health and Wellness and Mediation and Conciliation Committees.<br><br>
            Mr. John Carl T. Talan was inducted as the newest member of the Health and Wellness
            Committee. Whereas, Ms. Aleksey Diane S. Galvez and Mr. Luigi Kyle V. Rosales are the new
            members of the Mediation and Conciliation Committee.<br><br>
            The Health and Wellness Committee is responsible for formulating and implementing health and
            wellness programs for members and the DFA community. Whereas, the Mediation and
            Conciliation Committee is primarily responsible in settling all problems that may arise within the
            members of DFAMPC.`
      },
      {
          title: "MOA Signing for Courier Services",
          date: "March 8, 2025",
          image: "DFAMPC Assets/past4.webp",
          description: `The Department of Foreign Affairs Multi-Purpose Cooperative (DFAMPC) and Wide Wide World
            Express Corporation (W Express) signed a memorandum of Agreement for Courier Services.<br><br>
            The MOA was signed by Chairperson Richard T. Billedo for DFAMPC and Mr. Dexter Carlota,
            Senior Vice-President for Revenue Management, W Express.<br><br>
            W Express is a company in the Philippines engaged in courier, forwarding, sea freight, and other
            logistics-related services. The company has been in the business for over 52 years and is
            considered one of the best in the industry. W Express has been a steadfast partner of the
            DFAMPC since they set-up booth in the DFA Office of Consular Affairs (OCA) in March 2005 to
            November 2020.<br><br>
            The two parties recognized the need to provide better, reliable, secured, and fast delivery
            services of documents for the DFA's client and the agreement is a culmination of a year-long 
            negotiation.`
      },
      
     
  ];
    const today = new Date();
    const upcomingEvents = events.filter(event => new Date(event.date) > today);
    const pastEvents = events.filter(event => new Date(event.date) < today);

    console.log("Upcoming Events:", upcomingEvents);
    console.log("Past Events:", pastEvents);
    const pageSize = 5;
    const maxEvents = 7;
    const totalEvents = [...upcomingEvents, ...pastEvents];

    let currentPage = 1;

    const totalPages = Math.ceil(totalEvents.length / maxEvents);
    
    const latestEventContainer = document.getElementById("latestEventContainer");
    const latestEventContainer1 = document.getElementById("latestEventContainer1");
    const eventsList = document.getElementById("eventsList");
    const pastEventsList = document.getElementById("pastEventsList");
    const noEventsMessage = document.getElementById("noEvents");
    const pastEventsSection = document.getElementById("pastEventsSection");
    const upcomingEventsSection = document.getElementById("upcomingEventsSection");
    const paginationContainer = document.querySelector(".pagination-container");
    

    if (upcomingEvents.length > 0) {
        displayEvent(upcomingEvents[0]);
    } else if (pastEvents.length > 0) {
          pastEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
         displayEvent(pastEvents[0]);    
        
        } 
    function renderEvents(page) {
    eventsList.innerHTML = '';
    pastEventsList.innerHTML = '';
    noEventsMessage.classList.add("hidden");

    const startIndex = (page - 1) * maxEvents;
    const endIndex = page * maxEvents;
    const currentEvents = totalEvents.slice(startIndex, endIndex);

    const upcomingToShow = currentEvents.filter(event => new Date(event.date) > today);
    const pastToShow = currentEvents.filter(event => new Date(event.date) <= today);

    if (upcomingToShow.length === 0) {
        noEventsMessage.classList.remove("hidden");
    } else {
        upcomingToShow.forEach(event => {
            const eventItem = document.createElement("li");
            eventItem.classList.add("event-item", "flex", "gap-2", "cursor-pointer");
            eventItem.innerHTML = `
                <div class="w-42 h-24 overflow-hidden flex-none">
                    <img src="${event.image}" alt="${event.title}" class="w-full h-full object-fill border border-[#198754] rounded-lg">
                </div>
                <div>
                    <a href="#" class="text-black text-xs font-semibold block">${event.title}</a>
                    <span class="bg-[#F1F1F1] mt-0.5 text-black text-[10px] px-3 w-[113px] py-1 rounded-full flex items-center">
                        <img src="DFAMPC Assets/calendar-black.webp" alt="Calendar Icon" class="w-3 h-3 mr-1">${event.date}
                    </span>
                    <p class="text-black line-clamp-1 text-[10px] mt-1 font-normal">${event.description}</p>
                </div>
            `;
            eventItem.addEventListener("click", () => displayEvent(event));
            eventsList.appendChild(eventItem);
        });
    }

    if (page === 1 && upcomingToShow.length === 7) {
        pastEventsSection.classList.add("hidden");
        
    } else {
        pastEventsSection.classList.remove("hidden");
    }
    if (page > 1){
        noEventsMessage.classList.add("hidden");
    }
    pastToShow.forEach(event => {
        const pastEventItem = document.createElement("li");
        pastEventItem.classList.add("past-event-item", "flex", "gap-2", "cursor-pointer");
        pastEventItem.innerHTML = `
             <div class="w-34 sm:w-42 h-24 overflow-hidden flex-none">
                <img src="${event.image}" alt="${event.title}" class="w-full h-full object-fill border border-[#198754] rounded-[10px]">
            </div>
            <div>
                <a href="#" class="text-black text-xs font-semibold line-clamp-1">${event.title}</a>
                <span class="bg-[#F1F1F1] mt-0.5 text-black text-[10px] px-3 w-[113px] py-1 rounded-full flex items-center">
                    <img src="DFAMPC Assets/calendar-black.webp" alt="Calendar Icon" class="w-3 h-3 mr-1">${event.date}
                </span>
                <p class="text-black line-clamp-1 text-[10px] mt-1 font-normal">${event.description}</p>
            </div>
        `;
        pastEventItem.addEventListener("click", () => displayEvent(event));
        pastEventsList.appendChild(pastEventItem);
    });

    updatePagination(page);
}
    function updatePagination(currentPage) {
    const pageButtons = document.querySelectorAll(".page-number");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    const totalPages = Math.ceil(events.length / 7);

      if (currentPage < 1) currentPage = 1;
      if (currentPage > totalPages) currentPage = totalPages;

     prevButton.disabled = currentPage === 1;
     nextButton.disabled = currentPage === totalPages;

    pageButtons.forEach((button, index) => {
        const pageIndex = index + 1;
        button.classList.toggle("hidden", pageIndex !== currentPage);

        if (pageIndex === currentPage) {
            button.classList.add("bg-green-700", "text-white");
            button.classList.remove("bg-white", "border", "text-black");
        } else {
            button.classList.add("bg-white", "border", "text-black");
            button.classList.remove("bg-green-700", "text-white");
        }
    });

      prevButton.addEventListener("click", () => renderEvents(currentPage - 1));
      nextButton.addEventListener("click", () => renderEvents(currentPage + 1));
     for (let i = 0; i < pageButtons.length; i++) {
        const pageIndex = i + 1;
        if (pageIndex <= totalPages) {
            const pageButton = pageButtons[i];
            pageButton.textContent = pageIndex;
            pageButton.classList.remove("hidden"); 
            pageButton.addEventListener("click", () => renderEvents(pageIndex));
        } else {
            pageButtons[i].classList.add("hidden");
        }
    }
}
    renderEvents(currentPage);
    function displayEvent(event) {
    console.log("Displaying event:", event);
        latestEventContainer.innerHTML = `
              <div class="w-full flex justify-center items-center">
                <img src="${event.image}" alt="Event Image" class="event-image w-4/6">
              </div>
            
              <div class="mt-4 block">
                  <p class="event-title text-[#222222] font-[700] text-[29px] mt-4">${event.title}</p>
                  <div class="flex items-center space-x-2 text-sm mt-2">
                      <span class="bg-[#F2FFEB] text-[15px] text-[#198754] px-3 py-1 rounded-full">Event</span>
                      <span class="event-date bg-[#F1F1F1] text-[15px] text-[#222222] px-3 py-1 rounded-full flex items-center">
                          <img src="DFAMPC Assets/calendar.webp" alt="Calendar Icon" class="w-4 h-4 mr-1"> ${event.date}
                      </span>
                  </div>
                  <p class="text-[#222222] text-[15px] mt-4">${event.description}</p>
              </div>
          `;      
}
});

//Nav bar Active
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".lg\\:flex a");
    const aboutUsDropdown = document.getElementById("dropdownButton");

    navLinks.forEach(link => {
        if (window.location.pathname.includes(link.getAttribute("href"))) {
            link.classList.add("text-[#198754]", "after:h-[1.5px]", "after:scale-x-100");
        }
    });

    const aboutUsPages = ["about-us.html", "organizational-chart.html", "management-chart.html", "business-and-services.html", "faqs.html"];
    
    if (aboutUsPages.some(page => window.location.pathname.includes(page))) {
        aboutUsDropdown.classList.add("text-[#198754]", "after:scale-x-100");
    }
});

//Sidebar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('close-sidebar');
  const overlay = document.getElementById('overlay');
  const aboutToggle = document.getElementById('about-toggle');
  const aboutMenu = document.getElementById('about-menu');
  const aboutIcon = document.getElementById('about-icon');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  });
});


// Careers 
document.addEventListener('DOMContentLoaded', function () {
    const perPage = 4;
    const jobListings = document.getElementById('job-listings');
    const paginationContainer = document.querySelector('#pagination');
    const jobModal = document.getElementById('jobModal'); 
    const closeModal = document.getElementById('closeModal');
    const modalJobTitle = document.getElementById('modalJobTitle');
    const modalJobDate = document.getElementById('modalJobDate');
    const modalJobLocation = document.getElementById('modalJobLocation');
    const modalJobType = document.getElementById('modalJobType');
    const modalJobDescription = document.getElementById('modalJobDescription');
    const modalJobResponsibilities = document.getElementById('modalJobResponsibilities');

    let currentPage = 1;
  
    const jobs = [
      {
        title: 'Accounting Assistant',
        date: 'February 25, 2025',
        location: 'Makati City',
        type: 'Full-Time',
        description: 'We are looking for a detail-oriented and proactive Accounting Assistant to support our financial operations. The ideal candidate will be responsible for managing daily accounting tasks, ensuring accuracy in financial records, and assisting with reports and reconciliations. This role requires strong organizational skills, attention to detail, and the ability to work efficiently in a fast-paced environment while maintaining a high level of accuracy and professionalism.',
        responsibilities: ['Assist in managing financial transactions, including accounts payable and receivable.',
             'Prepare and process invoices, expense reports, and reimbursements', 
             'Maintain accurate financial records and ensure proper documentation of all transactions.', 
             'Reconcile bank statements and assist in month-end and year-end closing processes.',
             'Support the preparation of financial reports, budgets, and tax filings.',
             'Assist in payroll processing by ensuring accurate data entry and record-keeping.',
             'Ensure compliance with company policies, accounting principles, and government regulations.',
             'Coordinate with vendors and clients to resolve billing discrepancies and payment issues.',
             'Provide administrative support to the accounting team, including data entry and file organization.',
             'Use accounting software to update records and generate reports.',
             'Assist in audits by preparing necessary documentation and responding to inquiries.',
             'Collaborate with other departments to streamline financial processes and improve efficiency.'
            ]  
    },
      {
        title: 'Administrative Officer',
        date: 'February 28, 2025',
        location: 'Pasay City',
        type: 'Full-Time',
        description: 'We are looking for an organized and detail-oriented Administrative Officer to join our team. The ideal candidate will handle a variety of administrative tasks, including managing office supplies, organizing files, and providing support to various departments. This role is crucial in ensuring the smooth operation of our office and contributing to a positive work environment.',
        responsibilities: ['Handle daily administrative tasks including managing office supplies and equipment.',
            'Maintain and organize office files, documents, and records.', 
            'Assist in scheduling meetings, appointments, and travel arrangements.', 
            'Coordinate with various departments to ensure smooth workflow and communication.',
            'Prepare and process correspondence, reports, and presentations.',
            'Provide support for office events and activities.',
            'Handle incoming calls, emails, and other forms of communication.',
            'Assist in managing office budgets and expenses.'
           ]  
           },
      {
        title: 'General Manager',
        date: 'February 28, 2025',
        location: 'Pasay City',
        type: 'Full-Time',
        description: 'We are seeking an experienced and dynamic General Manager to oversee all daily operations of our organization. The successful candidate will be responsible for ensuring the efficiency of business operations, managing resources, and driving the company’s long-term success. This role requires strong leadership, decision-making abilities, and the capability to oversee multiple departments while fostering a positive and productive workplace culture.',
        responsibilities: ['Develop and implement strategies to ensure company growth and profitability.',
            'Oversee the daily operations of various departments, including finance, sales, marketing, human resources, and production.', 
            'Set performance goals for each department and monitor progress.', 
            'Analyze financial reports and prepare budgets to ensure profitability and sustainable business practices.',
            'Ensure the company operates in compliance with all laws and regulations.',
            'Lead and mentor department heads, fostering an environment of accountability and continuous improvement.',
            'Establish and maintain relationships with clients, vendors, and business partners.',
            'Identify and pursue business opportunities for expansion or partnerships.',
            'Implement and refine processes for operational efficiency.',
            'Lead company meetings and provide progress updates to stakeholders.'
           ]  
           },
    ];
  
    const totalPages = Math.ceil(jobs.length / perPage);
  
    function showPage(page) {
      currentPage = page;
      jobListings.innerHTML = '';
  
      const start = (page - 1) * perPage;
      const end = page * perPage;
      const jobsToShow = jobs.slice(start, end);
  
     jobsToShow.forEach((job, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white border border-[#D9D9D9] rounded-lg p-4';
        card.innerHTML = `
          <h3 class="text-base font-semibold text-[#222222]">${job.title}</h3>
          <div class="flex flex-wrap items-center gap-1.5 text-[#222222] text-xs mt-2">
            <span class="flex items-center px-2 py-1 rounded-full bg-[#F1F1F1] gap-0.3">
              <img src="DFAMPC Assets/calendar-black.webp" class="w-4 h-4 mr-1"><span>${job.date}</span>
            </span>
            <span class="flex items-center px-2 py-1 rounded-full bg-[#F1F1F1] gap-0.3">
              <img src="DFAMPC Assets/location-black.webp" class="w-4 h-4 mr-1"><span>${job.location}</span>
            </span>
            <span class="flex items-center px-2 py-1 rounded-full bg-[#F1F1F1] gap-1">${job.type}</span>
          </div>
          <p class="text-[#222222] line-clamp-3 text-xs mt-3">${job.description}</p>
          <button class="text-[#198754] font-semibold text-xs mt-4 inline-flex items-center" data-index="${index}">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7" />
            </svg>
            </button>
        `;
        jobListings.appendChild(card);
      });
  
      renderPageNumbers();
    }
  
    function renderPageNumbers() {
      paginationContainer.innerHTML = '';
  
      const firstBtn = createButton('«', () => showPage(1));
      const prevBtn = createButton('‹', () => currentPage > 1 && showPage(currentPage - 1));
      paginationContainer.appendChild(firstBtn);
      paginationContainer.appendChild(prevBtn);
  
      for (let i = 1; i <= totalPages; i++) {
        const numBtn = document.createElement('button');
        numBtn.textContent = i;
        numBtn.className = `w-7 h-7 flex items-center justify-center border text-[12px] font-[400] ${
          i === currentPage ? 'bg-green-700 text-white' : 'bg-white text-black'
        }`;
        numBtn.addEventListener('click', () => showPage(i));
        paginationContainer.appendChild(numBtn);
      }
  
      const nextBtn = createButton('›', () => currentPage < totalPages && showPage(currentPage + 1));
      const lastBtn = createButton('»', () => showPage(totalPages));
      paginationContainer.appendChild(nextBtn);
      paginationContainer.appendChild(lastBtn);
    }
  
    function createButton(label, onClick) {
      const btn = document.createElement('button');
      btn.innerHTML = label;
      btn.className = 'w-7 h-7 flex items-center justify-center text-[22px] text-[#D9D9D9] border';
      btn.addEventListener('click', onClick);
      return btn;
    }

   window.openJobDetails = function(index) {
    const job = jobs[index];
    modalJobTitle.textContent = job.title;
    modalJobDate.textContent = job.date;
    modalJobLocation.textContent = job.location;
    modalJobType.textContent = job.type;
    modalJobDescription.textContent = job.description;

    modalJobResponsibilities.innerHTML = '';
    job.responsibilities.forEach(responsibility => {
      const li = document.createElement('li');
      li.textContent = responsibility;
      modalJobResponsibilities.appendChild(li);
    });

    jobModal.style.display = 'flex';
    console.log('Modal is now visible');
  };

  closeModal.addEventListener('click', function () {
    console.log('Closing modal');

    jobModal.style.display = 'none'; 
  });

  jobListings.addEventListener('click', function (event) {
    const target = event.target.closest('button');
    if (target && target.hasAttribute('data-index')) {
      const index = target.getAttribute('data-index');
      openJobDetails(index);
    }
  });
  jobModal.style.display = 'none';

  showPage(currentPage);
  });

  // Apply Modal
  document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const jobModal = document.getElementById('jobModal');
    const applyModal = document.getElementById('applyModal');
    const closeApplyModal = document.getElementById('closeApplyModal');
    const openApplyModalButton = document.getElementById('ApplyModal');
    const applyForm = document.getElementById('applyForm');
    const customAlert = document.getElementById('customAlert');
    
    openApplyModalButton.addEventListener('click', function () {
      applyModal.style.display = 'flex';
      jobModal.style.display = 'none';
    });
    
    closeApplyModal.addEventListener('click', function () {
        applyModal.style.display = 'none';
    });
    
    applyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const coverLetter = document.getElementById('coverLetter').value;
  
      console.log('Application submitted:', { name, email, coverLetter });
  
    applyModal.style.display = 'none';
    applyForm.reset();

    customAlert.style.display = 'flex';

    setTimeout(function () {
      customAlert.style.display = 'none';
    }, 6000);
    });
    applyModal.style.display = 'none';
    customAlert.style.display = 'none';
    
  });
  
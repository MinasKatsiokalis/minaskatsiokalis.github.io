document.addEventListener('DOMContentLoaded', function() {
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

  collapsibleHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });

  const collapsibleHeaders2 = document.querySelectorAll('.collapsible-header-2');

  collapsibleHeaders2.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Skill bar animation
  const skillItems = document.querySelectorAll('.skills li');

  skillItems.forEach(item => {
    const level = item.dataset.level;
    if (level) {
      // Animate the width of the ::before pseudo-element
      item.style.setProperty('--skill-level', (level / 5) * 100 + '%');
    }
  });

  // Project Modals
  const projectModal = document.getElementById('projectModal');
  const closeButton = document.querySelector('.close-button');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalLinks = document.getElementById('modal-links');
  const projectItems = document.querySelectorAll('#projects li');

  const projectData = {
    'exploding-view': {
      title: 'Exploding View Tool (Unity Package)',
      description: 'A Unity package for exploding view functionality on 3D models. Can be adjusted quickly to any given 3D model. Faster and more optimised workflow comparing to animate each part separately.',
      links: [ { text: 'Github Link', url: 'https://github.com/MinasKatsiokalis/ExplodingView' } ]
    },
    'gonature-ar': {
      title: 'GoNature AR',
      description: 'An AR experience, designed for Hololens2 & Meta Quest devices, tailored for non-expert users utilizing mostly speech and audio interactions. The app communicates with a network of sensors through a REST API, and adapts dynamically the visual & audio effects and alternates the narration.',
      links: [ { text: 'Hololens2 Github Link', url: 'https://github.com/MinasKatsiokalis/GoNatureAR' }, { text: 'Meta Quest Github Link', url: 'https://github.com/MinasKatsiokalis/GoNatureAR-MetaQuest' } ]
    },
    'czar-georgioupolis': {
      title: 'CZAR: Georgioupolis',
      description: 'A Mobile Augmented Reality (MAR) application for coastal erosion visualization on-sight and in real time. User can use his/her smart-device to experience possible disastrous outcomes to the beach of Georgioupoli due to coastal erosion phenomenon.',
      links: [ { text: 'Github Link', url: 'https://github.com/MinasKatsiokalis/CZAR-Georgioupolis' } ]
    },
    'alphabetary': {
      title: 'AlphabetARy',
      description: 'An AR mobile application for helping young children learn the Greek Alphabet alongside the teachers guidance. The user can scan a number of cards (one for each greek letter) to enable a virtual experience where an animal/object pops up with numerous animations and sounds.',
      links: [ { text: 'Github Link', url: 'https://github.com/MinasKatsiokalis/AlphabetARy' } ]
    },
    'indoor-nav': {
      title: 'IndoorNav',
      description: 'An AR mobile application for testing on Vuforia Area Targets for Indoor Navigation.',
      links: [ { text: 'Github Link', url: 'https://github.com/MinasKatsiokalis/Vuforia-IndoorNav' } ]
    },
    'unsentenced': {
      title: 'UnSentenced',
      description: 'A game that created for a the Brackeys GameJam 2023.1 with the theme "An end is a new Beginning". It was a collective effort of 8 person-team. Available on: WebGL and Windows. Role: Lead Developer.',
      links: [ { text: 'Itch.io', url: 'https://yinnyann.itch.io/unsentenced' } ]
    },
    'bsp-dungeon': {
      title: 'Random Generated Dungeon Map',
      description: 'A random generated dungeon-like map, using 3D Binary Space Partitioning (BSP) algorithm. It separates planes randomly based on BSP creating smaller rooms and routes between them.  Can be used as a random generated map creator on numerous applications.',
      links: [ { text: 'Github Link', url: 'https://github.com/MinasKatsiokalis/Binary-Space-Partitioning' } ]
    },
    'unity-mini-games': {
      title: '3D Mini Games (Unity3D)',
      description: 'A collection of 3D Mini Games made in Unity3D.',
      links: [ { text: 'Bowling 3D Game', url: 'https://github.com/MinasKatsiokalis/Bowling-3D-Game' }, { text: 'Ball Racer 3D Game', url: 'https://github.com/MinasKatsiokalis/Ball-Racer-Mini-Game' } ]
    },
    'unreal-mini-games': {
      title: '3D Mini Games (Unreal Engine 4)',
      description: 'A collection of 3D Mini Games made in Unreal Engine 4.',
      links: [ { text: 'Crystal Cavern', url: 'https://github.com/MinasKatsiokalis/Crystal-Cavern-Unreal' }, { text: 'Marble Run', url: 'https://github.com/MinasKatsiokalis/Marble-Run-Unreal' } ]
    }
  };

  projectItems.forEach(item => {
    item.addEventListener('click', function() {
      const projectId = this.dataset.projectId;
      const project = projectData[projectId];

      if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalLinks.innerHTML = ''; // Clear previous links
        project.links.forEach(link => {
          const a = document.createElement('a');
          a.href = link.url;
          a.textContent = link.text;
          a.target = '_blank';
          modalLinks.appendChild(a);
        });
        projectModal.style.display = 'block';
      }
    });
  });

  closeButton.addEventListener('click', function() {
    projectModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === projectModal) {
      projectModal.style.display = 'none';
    }
  });

  // Job item hover expansion
  const jobItems = document.querySelectorAll('.job-item.hover-expandable');

  jobItems.forEach(item => {
    const detailsContent = item.querySelector('.job-details-content');
    if (detailsContent) {
      item.addEventListener('mouseenter', () => {
        detailsContent.style.maxHeight = detailsContent.scrollHeight + 'px';
      });
      item.addEventListener('mouseleave', () => {
        detailsContent.style.maxHeight = '0';
      });
    }
  });

  // Education item hover expansion
  const educationItems = document.querySelectorAll('.education-item.hover-expandable');

  educationItems.forEach(item => {
    const detailsContent = item.querySelector('.education-details-content');
    if (detailsContent) {
      item.addEventListener('mouseenter', () => {
        detailsContent.style.maxHeight = detailsContent.scrollHeight + 'px';
      });
      item.addEventListener('mouseleave', () => {
        detailsContent.style.maxHeight = '0';
      });
    }
  });

  // Skill sub-item hover expansion
  const skillSubItems = document.querySelectorAll('.skill-sub-item.hover-expandable');

  skillSubItems.forEach(item => {
    const detailsContent = item.querySelector('.skill-sub-content');
    if (detailsContent) {
      item.addEventListener('mouseenter', () => {
        detailsContent.style.maxHeight = detailsContent.scrollHeight + 'px';
      });
      item.addEventListener('mouseleave', () => {
        detailsContent.style.maxHeight = '0';
      });
    }
  });

  // Ensure Experience section is open on load
  const experienceHeader = document.querySelector('.work-experience .collapsible-header');
  const experienceContent = document.querySelector('.work-experience .collapsible-content');
  if (experienceHeader && experienceContent) {
    experienceContent.style.display = 'block';
  }
});
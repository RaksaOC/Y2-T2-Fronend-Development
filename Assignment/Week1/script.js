const teamMembers = [
    {
        name: "Parveen Anand",
        role: "Lead Designer",
        image: "images/parveen.png", 
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "Diana Petersen",
        role: "Lead Marketer",
        image: "images/diana.png",
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    },
    {
        name: "Larry Parker",
        role: "Lead Developer",
        image: "images/larry.png",  
        socialLinks: {
            twitter: "#",
            facebook: "#",
            linkedin: "#"
        }
    }
];

// Function to dynamically add team members to the page
const teamContainer = document.getElementById("team");

teamMembers.forEach(member => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("team-member");

    memberDiv.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <div class="social-links">
            <a href="${member.socialLinks.twitter}" target="_blank">🐦</a>
            <a href="${member.socialLinks.facebook}" target="_blank">📘</a>
            <a href="${member.socialLinks.linkedin}" target="_blank">🔗</a>
        </div>
    `;

    teamContainer.appendChild(memberDiv);
});

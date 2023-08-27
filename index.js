const header = document.getElementById("header");
const intercept = document.createElement("div");
intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);
const observer = new IntersectionObserver(([entry]) => {
  header.classList.toggle("active", !entry.isIntersecting);
});

observer.observe(intercept);

footers = [
  {
    header: "Platform",
    links: [
      "Pricing",
      "Sign up free",
      "Community",
      "Website builder",
      "Digital Products",
      "Email Marketing",
    ],
  },
  {
    header: "Support",
    links: [
      "Contact us",
      "Help center",
      "Hire a podia pro",
      "Creator community",
      "Podia 101",
    ],
  },
  {
    header: "Features",
    links: [
      "Online courses",
      "Downloads",
      "Webinars",
      "Coaching",
      "All features",
    ],
  },
  {
    header: "Social",
    links: ["Twitter", "Facebook", "Instagram", "Youtube"],
  },
];

const footer = document.getElementById("footer");

footers.map(
  (item, index) =>
    (footer.innerHTML += `
      <div>
        <button class="footer-button" onclick="onClick(${index})">
          ${item.header}<i class="bx bx-chevron-down" id="chevron"></i>
        </button>
        ${renderLinks(item, "lists")}
      </div>
      ${renderLinks(item, "list-dropdown")}
    `)
);

function renderLinks(item, className) {
  return `
    <ul class=${className}>
      ${item.links
        .map(
          (link) =>
            `<li>
              <a href="">${link}</a>
            </li>`
        )
        .join(" ")}
    </ul>
  `;
}

footer.innerHTML += `
  <p class="terms">
    Podia Labs, Inc. &copy; 2023 <a href="">Terms</a> <a href="">Privacy</a>
  </p>
`;

const button = document.getElementsByClassName("footer-button");

function onClick(i) {
  if (button[i].classList.contains("clicked")) {
    button[i].classList.remove("clicked");
  } else {
    button[i].classList.add("clicked");
  }
}

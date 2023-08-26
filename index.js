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
  (item) =>
    (footer.innerHTML += `
  <div>
    <button>${item.header}</button>
    <ul class="lists">
      ${item.links
        .map(
          (link) =>
            `<li>
            <a>${link}</a>
          </li>`
        )
        .join(" ")}
    </ul>
  </div>
  `)
);

footer.innerHTML += `
      <p class="terms">
        Podia Labs, Inc. &copy; 2023 <a href="">Terms</a> <a href="">Privacy</a>
      </p>
`;

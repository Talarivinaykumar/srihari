<script>
// Function to toggle the display of a section
function toggleSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Highlight link when clicked
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelectorAll("a").forEach(link => link.style.backgroundColor = ""); // Reset previous links
        this.style.backgroundColor = "#c1eac5"; // Highlight clicked link
        window.open(this.href, '_blank'); // Open link in new tab
    });
});

// Example: Toggle visibility of sections
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".farm-info h2").addEventListener("click", () => toggleSection("farm-info"));
    document.querySelector(".products h2").addEventListener("click", () => toggleSection("products"));
    document.querySelector(".videos h2").addEventListener("click", () => toggleSection("videos"));
    document.querySelector(".articles h2").addEventListener("click", () => toggleSection("articles"));
    document.querySelector(".workshops h2").addEventListener("click", () => toggleSection("workshops"));
});
</script>

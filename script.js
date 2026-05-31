// Sample business data
let businesses = [
    {
        id: 1,
        name: "Sunrise Cafe",
        category: "restaurant",
        address: "123 Main Street, Downtown",
        phone: "(555) 123-4567",
        hours: "7AM - 9PM",
        description: "Cozy cafe serving fresh coffee and homemade pastries. Family-friendly atmosphere."
    },
    {
        id: 2,
        name: "Urban Threads",
        category: "shop",
        address: "456 Fashion Ave",
        phone: "(555) 234-5678",
        hours: "10AM - 8PM",
        description: "Modern clothing boutique with sustainable fashion options."
    },
    {
        id: 3,
        name: "Wellness First Clinic",
        category: "healthcare",
        address: "789 Health Blvd",
        phone: "(555) 345-6789",
        hours: "8AM - 6PM",
        description: "Family medicine and urgent care. Walk-ins welcome."
    },
    {
        id: 4,
        name: "Bright Minds Academy",
        category: "education",
        address: "321 Learning Lane",
        phone: "(555) 456-7890",
        hours: "9AM - 5PM",
        description: "Tutoring and test prep for all ages. Expert instructors."
    }
];

let nextId = 5;
let currentCategory = "all";
let searchTerm = "";

// Load from localStorage
function loadData() {
    const saved = localStorage.getItem("businesses");
    if (saved) {
        businesses = JSON.parse(saved);
        const savedId = localStorage.getItem("nextId");
        if (savedId) nextId = parseInt(savedId);
    }
}

function saveData() {
    localStorage.setItem("businesses", JSON.stringify(businesses));
    localStorage.setItem("nextId", nextId);
}

// Filter businesses
function getFilteredBusinesses() {
    return businesses.filter(biz => {
        const matchesCategory = currentCategory === "all" || biz.category === currentCategory;
        const matchesSearch = searchTerm === "" || 
            biz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            biz.address.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Render business grid
function renderBusinessGrid() {
    const grid = document.getElementById("businessGrid");
    const filtered = getFilteredBusinesses();
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">✨ No businesses found. Try adding some via Admin Panel!</div>`;
        return;
    }
    
    grid.innerHTML = filtered.map(biz => `
        <div class="business-card" data-id="${biz.id}">
            <div class="business-category">${getCategoryIcon(biz.category)} ${biz.category}</div>
            <div class="business-name">${escapeHtml(biz.name)}</div>
            <div class="business-address">📍 ${escapeHtml(biz.address)}</div>
            <div class="business-hours">🕒 ${escapeHtml(biz.hours)}</div>
            <div class="business-actions">
                <button class="contact-btn" data-phone="${biz.phone}">📞 Contact</button>
                <button class="delete-business" data-id="${biz.id}">🗑️ Delete</button>
            </div>
        </div>
    `).join("");
    
    // Add click handlers for cards
    document.querySelectorAll(".business-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("contact-btn") || e.target.classList.contains("delete-business")) {
                return;
            }
            const id = parseInt(card.dataset.id);
            showBusinessDetail(id);
        });
    });
    
    // Contact button handlers
    document.querySelectorAll(".contact-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const phone = btn.dataset.phone;
            alert(`📞 Contact: ${phone}\n(Simulated call - in real app this would connect you)`);
        });
    });
    
    // Delete button handlers
    document.querySelectorAll(".delete-business").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            if (confirm("Remove this business?")) {
                businesses = businesses.filter(b => b.id !== id);
                saveData();
                renderBusinessGrid();
                renderAdminList();
            }
        });
    });
}

function getCategoryIcon(cat) {
    const icons = {
        restaurant: "🍕",
        shop: "🛍️",
        healthcare: "🏥",
        education: "📚"
    };
    return icons[cat] || "📍";
}

// Show business detail modal
function showBusinessDetail(id) {
    const biz = businesses.find(b => b.id === id);
    if (!biz) return;
    
    const modal = document.getElementById("detailModal");
    const modalBody = document.getElementById("modalBody");
    
    modalBody.innerHTML = `
        <h2 style="color: #F4A261; margin-bottom: 0.5rem;">${escapeHtml(biz.name)}</h2>
        <p style="color: #6B9080; margin-bottom: 1rem;">${biz.category}</p>
        <p><strong>📍 Address:</strong> ${escapeHtml(biz.address)}</p>
        <p><strong>📞 Phone:</strong> ${escapeHtml(biz.phone)}</p>
        <p><strong>🕒 Hours:</strong> ${escapeHtml(biz.hours)}</p>
        <p><strong>📝 About:</strong> ${escapeHtml(biz.description)}</p>
        <button id="modalContactBtn" style="margin-top: 1.5rem; background: #6B9080; color: white; border: none; padding: 0.6rem 1.5rem; border-radius: 40px; cursor: pointer;">📞 Contact Business</button>
    `;
    
    modal.classList.remove("hidden");
    
    document.getElementById("modalContactBtn")?.addEventListener("click", () => {
        alert(`📞 Contact ${biz.name} at ${biz.phone}`);
    });
}

// Render admin list
function renderAdminList() {
    const container = document.getElementById("adminBusinessList");
    if (businesses.length === 0) {
        container.innerHTML = "<p style='color: #8B9A8F;'>No businesses yet. Add your first!</p>";
        return;
    }
    
    container.innerHTML = businesses.map(biz => `
        <div class="admin-business-item">
            <div class="admin-business-name">${escapeHtml(biz.name)} <span style="color: #F4A261; font-size: 0.8rem;">(${biz.category})</span></div>
            <button class="admin-delete" data-id="${biz.id}">Remove</button>
        </div>
    `).join("");
    
    document.querySelectorAll(".admin-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            if (confirm("Delete this business?")) {
                businesses = businesses.filter(b => b.id !== id);
                saveData();
                renderBusinessGrid();
                renderAdminList();
            }
        });
    });
}

// Add new business
function addBusiness() {
    const name = document.getElementById("businessName").value.trim();
    const category = document.getElementById("businessCategory").value.trim().toLowerCase();
    const address = document.getElementById("businessAddress").value.trim();
    const phone = document.getElementById("businessPhone").value.trim();
    const hours = document.getElementById("businessHours").value.trim();
    const description = document.getElementById("businessDesc").value.trim();
    
    if (!name || !category || !address || !phone) {
        alert("Please fill at least: Name, Category, Address, Phone");
        return;
    }
    
    const validCategories = ["restaurant", "shop", "healthcare", "education"];
    if (!validCategories.includes(category)) {
        alert(`Category must be one of: ${validCategories.join(", ")}`);
        return;
    }
    
    const newBiz = {
        id: nextId++,
        name,
        category,
        address,
        phone,
        hours: hours || "Contact for hours",
        description: description || "Local business serving the community."
    };
    
    businesses.push(newBiz);
    saveData();
    
    // Clear form
    document.getElementById("businessName").value = "";
    document.getElementById("businessCategory").value = "";
    document.getElementById("businessAddress").value = "";
    document.getElementById("businessPhone").value = "";
    document.getElementById("businessHours").value = "";
    document.getElementById("businessDesc").value = "";
    
    renderBusinessGrid();
    renderAdminList();
    
    alert(`✅ "${name}" added successfully!`);
}

// Escape HTML to prevent XSS
function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>]/g, function(m) {
        if (m === "&") return "&amp;";
        if (m === "<") return "&lt;";
        if (m === ">") return "&gt;";
        return m;
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search
    document.getElementById("searchBtn").addEventListener("click", () => {
        searchTerm = document.getElementById("searchInput").value;
        renderBusinessGrid();
    });
    
    document.getElementById("searchInput").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            searchTerm = document.getElementById("searchInput").value;
            renderBusinessGrid();
        }
    });
    
    // Categories
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderBusinessGrid();
        });
    });
    
    // Admin panel toggle
    const adminPanel = document.getElementById("adminPanel");
    document.getElementById("adminToggleBtn").addEventListener("click", () => {
        adminPanel.classList.toggle("hidden");
        if (!adminPanel.classList.contains("hidden")) {
            renderAdminList();
        }
    });
    
    // Add business
    document.getElementById("addBusinessBtn").addEventListener("click", addBusiness);
    
    // Modal close
    document.querySelector(".close").addEventListener("click", () => {
        document.getElementById("detailModal").classList.add("hidden");
    });
    
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("detailModal");
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
}

// Initialize
loadData();
setupEventListeners();
renderBusinessGrid();
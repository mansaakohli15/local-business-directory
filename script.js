let businesses = [
    {
        id: 1,
        name: "Sunrise Cafe",
        category: "restaurant",
        address: "123 Main Street, Downtown",
        phone: "(555) 123-4567",
        hours: "7AM - 9PM",
        description: "Cozy cafe serving fresh coffee and homemade pastries. Family-friendly atmosphere with outdoor seating."
    },
    {
        id: 2,
        name: "Urban Threads",
        category: "shop",
        address: "456 Fashion Ave",
        phone: "(555) 234-5678",
        hours: "10AM - 8PM",
        description: "Modern clothing boutique with sustainable fashion options. Eco-friendly packaging."
    },
    {
        id: 3,
        name: "Wellness First Clinic",
        category: "healthcare",
        address: "789 Health Blvd",
        phone: "(555) 345-6789",
        hours: "8AM - 6PM",
        description: "Family medicine and urgent care. Walk-ins welcome. Most insurance accepted."
    },
    {
        id: 4,
        name: "Bright Minds Academy",
        category: "education",
        address: "321 Learning Lane",
        phone: "(555) 456-7890",
        hours: "9AM - 5PM",
        description: "Tutoring and test prep for all ages. Expert instructors with proven results."
    },
    {
        id: 5,
        name: "City General Hospital",
        category: "healthcare",
        address: "100 Medical Center Dr",
        phone: "(555) 789-0123",
        hours: "24/7 Emergency",
        description: "Full-service hospital with emergency care, surgery, and specialized clinics. Level 1 trauma center."
    },
    {
        id: 6,
        name: "Smile Dental Care",
        category: "healthcare",
        address: "222 Healthy Smiles Ave",
        phone: "(555) 890-1234",
        hours: "9AM - 7PM",
        description: "Family dentistry, cleanings, braces, and whitening services. Emergency appointments available."
    },
    {
        id: 7,
        name: "Green Leaf Pharmacy",
        category: "healthcare",
        address: "55 Wellness Blvd",
        phone: "(555) 901-2345",
        hours: "8AM - 10PM",
        description: "Prescriptions, health supplies, and free delivery. Immunizations available."
    },
    {
        id: 8,
        name: "Pasta Paradise",
        category: "restaurant",
        address: "77 Italian Way",
        phone: "(555) 012-3456",
        hours: "11AM - 11PM",
        description: "Authentic Italian pasta, pizza, and wine. Family recipes since 1985."
    },
    {
        id: 9,
        name: "Tech Hub Store",
        category: "shop",
        address: "888 Electronics Row",
        phone: "(555) 123-7890",
        hours: "10AM - 9PM",
        description: "Laptops, phones, accessories, and repairs. Price match guarantee."
    },
    {
        id: 10,
        name: "Yoga Wellness Studio",
        category: "healthcare",
        address: "33 Peaceful Lane",
        phone: "(555) 234-8901",
        hours: "7AM - 8PM",
        description: "Yoga, meditation, and wellness classes for all levels. First class free!"
    },
    {
        id: 11,
        name: "Golden Dragon Restaurant",
        category: "restaurant",
        address: "888 Spice Street",
        phone: "(555) 345-9012",
        hours: "11AM - 10PM",
        description: "Authentic Chinese cuisine. Dumplings, noodles, and family-style meals."
    },
    {
        id: 12,
        name: "Hope Medical Center",
        category: "healthcare",
        address: "444 Care Avenue",
        phone: "(555) 456-0123",
        hours: "24/7",
        description: "Multi-specialty hospital with advanced diagnostic services. Emergency care always open."
    },
    {
        id: 13,
        name: "Little Scholars Preschool",
        category: "education",
        address: "777 Future Way",
        phone: "(555) 567-1234",
        hours: "8AM - 4PM",
        description: "Early childhood education. Play-based learning for ages 2-5."
    }
];

let nextId = 14;
let currentCategory = "all";
let searchTerm = "";

// Load from localStorage
function loadData() {
    const saved = localStorage.getItem("localhub_businesses");
    if (saved) {
        businesses = JSON.parse(saved);
        const savedId = localStorage.getItem("localhub_nextId");
        if (savedId) nextId = parseInt(savedId);
    } else {
        // First time - save initial data
        saveData();
    }
}

function saveData() {
    localStorage.setItem("localhub_businesses", JSON.stringify(businesses));
    localStorage.setItem("localhub_nextId", nextId);
}

// Filter businesses
function getFilteredBusinesses() {
    return businesses.filter(biz => {
        const matchesCategory = currentCategory === "all" || biz.category === currentCategory;
        const matchesSearch = searchTerm === "" || 
            biz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            biz.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            biz.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Get category icon emoji
function getCategoryIcon(cat) {
    const icons = {
        restaurant: "🍕",
        shop: "🛍️",
        healthcare: "🏥",
        education: "📚"
    };
    return icons[cat] || "📍";
}

// Get category display name
function getCategoryDisplay(cat) {
    const names = {
        restaurant: "Restaurant",
        shop: "Shop",
        healthcare: "Healthcare",
        education: "Education"
    };
    return names[cat] || cat;
}

// Render business grid
function renderBusinessGrid() {
    const grid = document.getElementById("businessGrid");
    const filtered = getFilteredBusinesses();
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">✨ No businesses found. Try a different search or add some via Admin Panel!</div>`;
        return;
    }
    
    grid.innerHTML = filtered.map(biz => `
        <div class="business-card" data-id="${biz.id}">
            <div class="business-category">${getCategoryIcon(biz.category)} ${getCategoryDisplay(biz.category)}</div>
            <div class="business-name">${escapeHtml(biz.name)}</div>
            <div class="business-address">📍 ${escapeHtml(biz.address)}</div>
            <div class="business-hours">🕒 ${escapeHtml(biz.hours)}</div>
            <div class="business-actions">
                <button class="contact-btn" data-phone="${escapeHtml(biz.phone)}" data-name="${escapeHtml(biz.name)}">📞 Contact</button>
                <button class="delete-business" data-id="${biz.id}">🗑️ Delete</button>
            </div>
        </div>
    `).join("");
    
    // Add click handlers for cards (view details)
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
            const name = btn.dataset.name;
            alert(`📞 Contacting ${name}\nPhone: ${phone}\n\n(In a real app, this would initiate a call or show a contact form)`);
        });
    });
    
    // Delete button handlers
    document.querySelectorAll(".delete-business").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const biz = businesses.find(b => b.id === id);
            if (confirm(`Remove "${biz?.name}" from the directory?`)) {
                businesses = businesses.filter(b => b.id !== id);
                saveData();
                renderBusinessGrid();
                renderAdminList();
                showToast(`🗑️ "${biz?.name}" removed`, "remove");
            }
        });
    });
}

// Show business detail modal
function showBusinessDetail(id) {
    const biz = businesses.find(b => b.id === id);
    if (!biz) return;
    
    const modal = document.getElementById("detailModal");
    const modalBody = document.getElementById("modalBody");
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <span style="font-size: 3rem;">${getCategoryIcon(biz.category)}</span>
        </div>
        <h2 style="color: #C77A6F; margin-bottom: 0.5rem; font-size: 1.8rem;">${escapeHtml(biz.name)}</h2>
        <p style="color: #E6B17E; margin-bottom: 1.5rem; font-weight: 500;">${getCategoryDisplay(biz.category)}</p>
        
        <div style="background: #FFFDF5; padding: 1rem; border-radius: 16px; margin-bottom: 1rem;">
            <p style="margin-bottom: 0.5rem;"><strong>📍 Address:</strong> ${escapeHtml(biz.address)}</p>
            <p style="margin-bottom: 0.5rem;"><strong>📞 Phone:</strong> ${escapeHtml(biz.phone)}</p>
            <p style="margin-bottom: 0.5rem;"><strong>🕒 Hours:</strong> ${escapeHtml(biz.hours)}</p>
        </div>
        
        <p style="margin-bottom: 1.5rem; line-height: 1.6;"><strong>📝 About:</strong> ${escapeHtml(biz.description)}</p>
        
        <button id="modalContactBtn" style="width: 100%; background: #E6B17E; color: #4A3B32; border: none; padding: 0.8rem; border-radius: 40px; cursor: pointer; font-weight: 600; font-size: 1rem;">📞 Contact Business</button>
    `;
    
    modal.classList.remove("hidden");
    
    document.getElementById("modalContactBtn")?.addEventListener("click", () => {
        alert(`📞 Contact ${biz.name} at ${biz.phone}\n\n(In a real app, this would connect you directly)`);
    });
}

// Render admin list
function renderAdminList() {
    const container = document.getElementById("adminBusinessList");
    if (businesses.length === 0) {
        container.innerHTML = "<p style='color: #B0A89A;'>No businesses yet. Add your first!</p>";
        return;
    }
    
    container.innerHTML = businesses.map(biz => `
        <div class="admin-business-item">
            <div class="admin-business-name">
                ${escapeHtml(biz.name)} 
                <span style="color: #E6B17E; font-size: 0.75rem; font-weight: 500;">(${getCategoryDisplay(biz.category)})</span>
            </div>
            <button class="admin-delete" data-id="${biz.id}">Remove</button>
        </div>
    `).join("");
    
    document.querySelectorAll(".admin-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const biz = businesses.find(b => b.id === id);
            if (confirm(`Delete "${biz?.name}" from directory?`)) {
                businesses = businesses.filter(b => b.id !== id);
                saveData();
                renderBusinessGrid();
                renderAdminList();
                showToast(`🗑️ "${biz?.name}" deleted`, "remove");
            }
        });
    });
}

// Simple toast notification
function showToast(message, type = "add") {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = type === "add" ? "#E6B17E" : "#C77A6F";
    toast.style.color = "#4A3B32";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "40px";
    toast.style.fontWeight = "500";
    toast.style.fontSize = "0.9rem";
    toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    toast.style.zIndex = "2000";
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 2500);
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
        alert("⚠️ Please fill at least: Name, Category, Address, Phone");
        return;
    }
    
    const validCategories = ["restaurant", "shop", "healthcare", "education"];
    if (!validCategories.includes(category)) {
        alert(`⚠️ Category must be one of: ${validCategories.join(", ")}`);
        return;
    }
    
    const newBiz = {
        id: nextId++,
        name: name,
        category: category,
        address: address,
        phone: phone,
        hours: hours || "Contact for hours",
        description: description || "Local business serving the community with quality service."
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
    showToast(`✨ "${name}" added successfully!`, "add");
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
    
    // Clear search button functionality (optional)
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        if (searchInput.value === "") {
            searchTerm = "";
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
    const adminToggle = document.getElementById("adminToggleBtn");
    adminToggle.addEventListener("click", () => {
        adminPanel.classList.toggle("hidden");
        if (!adminPanel.classList.contains("hidden")) {
            renderAdminList();
            adminToggle.textContent = "📋 Close Admin";
        } else {
            adminToggle.textContent = "📋 Admin Panel";
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

// Initialize everything
loadData();
setupEventListeners();
renderBusinessGrid();
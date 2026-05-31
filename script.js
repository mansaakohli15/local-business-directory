// ============================================
// LOCALHUB - Complete with 13 Businesses + Maps + Reviews
// ============================================

let businesses = [
    {
        id: 1,
        name: "Sunrise Cafe",
        category: "restaurant",
        address: "123 Main Street, Downtown",
        phone: "(555) 123-4567",
        hours: "7AM - 9PM",
        description: "Cozy cafe serving fresh coffee and homemade pastries. Family-friendly atmosphere with outdoor seating.",
        lat: 40.7128,
        lng: -74.0060,
        rating: 4.5,
        reviews: [
            { user: "Sarah", rating: 5, comment: "Best coffee in town!", date: "2024-03-15" },
            { user: "Mike", rating: 4, comment: "Great atmosphere, friendly staff", date: "2024-03-10" }
        ]
    },
    {
        id: 2,
        name: "Urban Threads",
        category: "shop",
        address: "456 Fashion Ave",
        phone: "(555) 234-5678",
        hours: "10AM - 8PM",
        description: "Modern clothing boutique with sustainable fashion options. Eco-friendly packaging.",
        lat: 40.7145,
        lng: -74.0080,
        rating: 4.2,
        reviews: [
            { user: "Emma", rating: 5, comment: "Love their sustainable collection!", date: "2024-03-12" },
            { user: "James", rating: 3.5, comment: "Good quality but pricey", date: "2024-03-08" }
        ]
    },
    {
        id: 3,
        name: "Wellness First Clinic",
        category: "healthcare",
        address: "789 Health Blvd",
        phone: "(555) 345-6789",
        hours: "8AM - 6PM",
        description: "Family medicine and urgent care. Walk-ins welcome. Most insurance accepted.",
        lat: 40.7160,
        lng: -74.0100,
        rating: 4.8,
        reviews: [
            { user: "Dr. Smith", rating: 5, comment: "Excellent care, very professional", date: "2024-03-14" },
            { user: "Lisa", rating: 4.5, comment: "Short wait times, great doctors", date: "2024-03-09" }
        ]
    },
    {
        id: 4,
        name: "Bright Minds Academy",
        category: "education",
        address: "321 Learning Lane",
        phone: "(555) 456-7890",
        hours: "9AM - 5PM",
        description: "Tutoring and test prep for all ages. Expert instructors with proven results.",
        lat: 40.7180,
        lng: -74.0120,
        rating: 4.6,
        reviews: [
            { user: "Parent", rating: 5, comment: "My child's grades improved significantly", date: "2024-03-11" },
            { user: "John", rating: 4, comment: "Knowledgeable tutors", date: "2024-03-07" }
        ]
    },
    {
        id: 5,
        name: "City General Hospital",
        category: "healthcare",
        address: "100 Medical Center Dr",
        phone: "(555) 789-0123",
        hours: "24/7 Emergency",
        description: "Full-service hospital with emergency care, surgery, and specialized clinics. Level 1 trauma center.",
        lat: 40.7200,
        lng: -74.0140,
        rating: 4.7,
        reviews: [
            { user: "Robert", rating: 5, comment: "Saved my life, forever grateful", date: "2024-03-13" },
            { user: "Maria", rating: 4.5, comment: "Great emergency response", date: "2024-03-06" }
        ]
    },
    {
        id: 6,
        name: "Smile Dental Care",
        category: "healthcare",
        address: "222 Healthy Smiles Ave",
        phone: "(555) 890-1234",
        hours: "9AM - 7PM",
        description: "Family dentistry, cleanings, braces, and whitening services. Emergency appointments available.",
        lat: 40.7220,
        lng: -74.0160,
        rating: 4.9,
        reviews: [
            { user: "David", rating: 5, comment: "Painless cleaning, amazing staff", date: "2024-03-14" },
            { user: "Jennifer", rating: 5, comment: "Best dentist I've ever been to", date: "2024-03-10" }
        ]
    },
    {
        id: 7,
        name: "Green Leaf Pharmacy",
        category: "healthcare",
        address: "55 Wellness Blvd",
        phone: "(555) 901-2345",
        hours: "8AM - 10PM",
        description: "Prescriptions, health supplies, and free delivery. Immunizations available.",
        lat: 40.7240,
        lng: -74.0180,
        rating: 4.4,
        reviews: [
            { user: "Thomas", rating: 4.5, comment: "Fast service, friendly pharmacists", date: "2024-03-12" },
            { user: "Amanda", rating: 4, comment: "Good prices on medications", date: "2024-03-08" }
        ]
    },
    {
        id: 8,
        name: "Pasta Paradise",
        category: "restaurant",
        address: "77 Italian Way",
        phone: "(555) 012-3456",
        hours: "11AM - 11PM",
        description: "Authentic Italian pasta, pizza, and wine. Family recipes since 1985.",
        lat: 40.7260,
        lng: -74.0200,
        rating: 4.7,
        reviews: [
            { user: "Marco", rating: 5, comment: "Best lasagna ever!", date: "2024-03-13" },
            { user: "Sophia", rating: 4.5, comment: "Great wine selection", date: "2024-03-09" }
        ]
    },
    {
        id: 9,
        name: "Tech Hub Store",
        category: "shop",
        address: "888 Electronics Row",
        phone: "(555) 123-7890",
        hours: "10AM - 9PM",
        description: "Laptops, phones, accessories, and repairs. Price match guarantee.",
        lat: 40.7280,
        lng: -74.0220,
        rating: 4.3,
        reviews: [
            { user: "Alex", rating: 5, comment: "Fixed my laptop in an hour", date: "2024-03-11" },
            { user: "Nina", rating: 4, comment: "Good selection of products", date: "2024-03-07" }
        ]
    },
    {
        id: 10,
        name: "Yoga Wellness Studio",
        category: "healthcare",
        address: "33 Peaceful Lane",
        phone: "(555) 234-8901",
        hours: "7AM - 8PM",
        description: "Yoga, meditation, and wellness classes for all levels. First class free!",
        lat: 40.7300,
        lng: -74.0240,
        rating: 4.8,
        reviews: [
            { user: "Rachel", rating: 5, comment: "Life-changing classes", date: "2024-03-14" },
            { user: "Chris", rating: 4.5, comment: "Very peaceful atmosphere", date: "2024-03-10" }
        ]
    },
    {
        id: 11,
        name: "Golden Dragon Restaurant",
        category: "restaurant",
        address: "888 Spice Street",
        phone: "(555) 345-9012",
        hours: "11AM - 10PM",
        description: "Authentic Chinese cuisine. Dumplings, noodles, and family-style meals.",
        lat: 40.7320,
        lng: -74.0260,
        rating: 4.5,
        reviews: [
            { user: "Wei", rating: 5, comment: "Best dumplings in the city", date: "2024-03-12" },
            { user: "Linda", rating: 4, comment: "Generous portions", date: "2024-03-08" }
        ]
    },
    {
        id: 12,
        name: "Hope Medical Center",
        category: "healthcare",
        address: "444 Care Avenue",
        phone: "(555) 456-0123",
        hours: "24/7",
        description: "Multi-specialty hospital with advanced diagnostic services. Emergency care always open.",
        lat: 40.7340,
        lng: -74.0280,
        rating: 4.6,
        reviews: [
            { user: "Patricia", rating: 5, comment: "Compassionate staff", date: "2024-03-13" },
            { user: "Michael", rating: 4, comment: "Modern facilities", date: "2024-03-09" }
        ]
    },
    {
        id: 13,
        name: "Little Scholars Preschool",
        category: "education",
        address: "777 Future Way",
        phone: "(555) 567-1234",
        hours: "8AM - 4PM",
        description: "Early childhood education. Play-based learning for ages 2-5.",
        lat: 40.7360,
        lng: -74.0300,
        rating: 4.9,
        reviews: [
            { user: "Jessica", rating: 5, comment: "My daughter loves this place", date: "2024-03-14" },
            { user: "Brian", rating: 5, comment: "Excellent teachers", date: "2024-03-10" }
        ]
    }
];

let nextId = 14;
let currentCategory = "all";
let searchTerm = "";

function loadData() {
    const saved = localStorage.getItem("localhub_businesses");
    if (saved && JSON.parse(saved).length > 0) {
        businesses = JSON.parse(saved);
        const savedId = localStorage.getItem("localhub_nextId");
        if (savedId) nextId = parseInt(savedId);
    } else {
        saveData();
    }
}

function saveData() {
    localStorage.setItem("localhub_businesses", JSON.stringify(businesses));
    localStorage.setItem("localhub_nextId", nextId);
}

function getFilteredBusinesses() {
    return businesses.filter(biz => {
        const matchesCategory = currentCategory === "all" || biz.category === currentCategory;
        const matchesSearch = searchTerm === "" || 
            biz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            biz.address.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
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

function getCategoryDisplay(cat) {
    const names = {
        restaurant: "Restaurant",
        shop: "Shop",
        healthcare: "Healthcare",
        education: "Education"
    };
    return names[cat] || cat;
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '⭐';
    if (halfStar) stars += '½';
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) stars += '☆';
    return stars;
}

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
            <div class="business-rating">${renderStars(biz.rating)} (${biz.reviews.length} reviews)</div>
            <div class="business-address">📍 ${escapeHtml(biz.address)}</div>
            <div class="business-hours">🕒 ${escapeHtml(biz.hours)}</div>
            <div class="business-actions">
                <button class="contact-btn" data-phone="${escapeHtml(biz.phone)}" data-name="${escapeHtml(biz.name)}">📞 Contact</button>
                <button class="delete-business" data-id="${biz.id}">🗑️ Delete</button>
            </div>
        </div>
    `).join("");
    
    document.querySelectorAll(".business-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("contact-btn") || e.target.classList.contains("delete-business")) {
                return;
            }
            const id = parseInt(card.dataset.id);
            showBusinessDetail(id);
        });
    });
    
    document.querySelectorAll(".contact-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const phone = btn.dataset.phone;
            const name = btn.dataset.name;
            alert(`📞 Contacting ${name}\nPhone: ${phone}`);
        });
    });
    
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
                showToast(`🗑️ "${biz?.name}" removed`);
            }
        });
    });
}

function showBusinessDetail(id) {
    const biz = businesses.find(b => b.id === id);
    if (!biz) return;
    
    const modal = document.getElementById("detailModal");
    const modalBody = document.getElementById("modalBody");
    
    const reviewsHtml = biz.reviews.map(review => `
        <div style="border-bottom: 1px solid #F0E5D6; padding: 0.8rem 0;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
                <strong>${escapeHtml(review.user)}</strong>
                <span>${renderStars(review.rating)}</span>
            </div>
            <p style="color: #6B7A6F; font-size: 0.85rem;">${escapeHtml(review.comment)}</p>
            <small style="color: #8B9A8F;">${review.date}</small>
        </div>
    `).join("");
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <span style="font-size: 3rem;">${getCategoryIcon(biz.category)}</span>
        </div>
        <h2 style="color: #F4A261; margin-bottom: 0.5rem; font-size: 1.8rem;">${escapeHtml(biz.name)}</h2>
        <p style="color: #6B9080; margin-bottom: 1rem;">${getCategoryDisplay(biz.category)}</p>
        
        <div style="text-align: center; margin-bottom: 1rem;">
            <div style="font-size: 1.2rem;">${renderStars(biz.rating)}</div>
            <small>${biz.reviews.length} customer reviews</small>
        </div>
        
        <div style="background: #FEF9F0; padding: 1rem; border-radius: 16px; margin-bottom: 1rem;">
            <p><strong>📍 Address:</strong> ${escapeHtml(biz.address)}</p>
            <p><strong>📞 Phone:</strong> ${escapeHtml(biz.phone)}</p>
            <p><strong>🕒 Hours:</strong> ${escapeHtml(biz.hours)}</p>
        </div>
        
        <p style="margin-bottom: 1rem;"><strong>📝 About:</strong> ${escapeHtml(biz.description)}</p>
        
        <div style="margin-bottom: 1rem;">
            <strong>🗺️ Location Map</strong>
            <div id="businessMap" style="height: 200px; width: 100%; margin-top: 0.5rem; border-radius: 16px; overflow: hidden;"></div>
        </div>
        
        <div style="margin-bottom: 1rem;">
            <strong>⭐ Customer Reviews</strong>
            <div id="reviewsList" style="max-height: 200px; overflow-y: auto; margin-top: 0.5rem;">
                ${reviewsHtml || '<p style="color: #8B9A8F;">No reviews yet. Be the first!</p>'}
            </div>
        </div>
        
        <div style="background: #FEF9F0; padding: 1rem; border-radius: 16px; margin-bottom: 1rem;">
            <strong>✍️ Leave a Review</strong>
            <input type="text" id="reviewUserName" placeholder="Your name" style="width: 100%; padding: 0.5rem; margin: 0.5rem 0; border-radius: 8px; border: 1px solid #F0E5D6;">
            <select id="reviewRating" style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; border-radius: 8px; border: 1px solid #F0E5D6;">
                <option value="5">⭐⭐⭐⭐⭐ 5 stars</option>
                <option value="4">⭐⭐⭐⭐ 4 stars</option>
                <option value="3">⭐⭐⭐ 3 stars</option>
                <option value="2">⭐⭐ 2 stars</option>
                <option value="1">⭐ 1 star</option>
            </select>
            <textarea id="reviewComment" rows="2" placeholder="Your review..." style="width: 100%; padding: 0.5rem; border-radius: 8px; border: 1px solid #F0E5D6;"></textarea>
            <button id="submitReviewBtn" style="background: #F4A261; color: white; border: none; padding: 0.6rem; width: 100%; border-radius: 40px; margin-top: 0.5rem; cursor: pointer;">Submit Review</button>
        </div>
        
        <button id="modalContactBtn" style="width: 100%; background: #6B9080; color: white; border: none; padding: 0.8rem; border-radius: 40px; cursor: pointer;">📞 Contact Business</button>
    `;
    
    modal.classList.remove("hidden");
    
    setTimeout(() => {
        if (typeof L !== 'undefined') {
            const map = L.map('businessMap').setView([biz.lat, biz.lng], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            L.marker([biz.lat, biz.lng]).addTo(map).bindPopup(biz.name).openPopup();
        }
    }, 100);
    
    document.getElementById("modalContactBtn")?.addEventListener("click", () => {
        alert(`📞 Contact ${biz.name} at ${biz.phone}`);
    });
    
    document.getElementById("submitReviewBtn")?.addEventListener("click", () => {
        const userName = document.getElementById("reviewUserName").value.trim();
        const rating = parseInt(document.getElementById("reviewRating").value);
        const comment = document.getElementById("reviewComment").value.trim();
        
        if (!userName || !comment) {
            alert("⚠️ Please enter your name and comment");
            return;
        }
        
        const today = new Date().toISOString().split('T')[0];
        biz.reviews.push({ user: userName, rating: rating, comment: comment, date: today });
        
        let total = 0;
        biz.reviews.forEach(r => total += r.rating);
        biz.rating = total / biz.reviews.length;
        
        saveData();
        showToast("✨ Thanks for your review!");
        showBusinessDetail(id);
    });
}

function renderAdminList() {
    const container = document.getElementById("adminBusinessList");
    if (businesses.length === 0) {
        container.innerHTML = "<p style='color: #8B9A8F;'>No businesses yet. Add your first!</p>";
        return;
    }
    
    container.innerHTML = businesses.map(biz => `
        <div class="admin-business-item">
            <div class="admin-business-name">${escapeHtml(biz.name)} <span style="color: #F4A261;">(${getCategoryDisplay(biz.category)})</span></div>
            <button class="admin-delete" data-id="${biz.id}">Remove</button>
        </div>
    `).join("");
    
    document.querySelectorAll(".admin-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const biz = businesses.find(b => b.id === id);
            if (confirm(`Delete "${biz?.name}"?`)) {
                businesses = businesses.filter(b => b.id !== id);
                saveData();
                renderBusinessGrid();
                renderAdminList();
                showToast(`🗑️ "${biz?.name}" deleted`);
            }
        });
    });
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#6B9080";
    toast.style.color = "white";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "40px";
    toast.style.fontWeight = "500";
    toast.style.zIndex = "2000";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function addBusiness() {
    const name = document.getElementById("businessName").value.trim();
    const category = document.getElementById("businessCategory").value.trim().toLowerCase();
    const address = document.getElementById("businessAddress").value.trim();
    const phone = document.getElementById("businessPhone").value.trim();
    const hours = document.getElementById("businessHours").value.trim();
    const description = document.getElementById("businessDesc").value.trim();
    
    if (!name || !category || !address || !phone) {
        alert("⚠️ Please fill Name, Category, Address, Phone");
        return;
    }
    
    const validCategories = ["restaurant", "shop", "healthcare", "education"];
    if (!validCategories.includes(category)) {
        alert(`⚠️ Category must be: ${validCategories.join(", ")}`);
        return;
    }
    
    const newBiz = {
        id: nextId++,
        name: name,
        category: category,
        address: address,
        phone: phone,
        hours: hours || "Contact for hours",
        description: description || "Local business serving the community.",
        lat: 40.7400 + (Math.random() * 0.02 - 0.01),
        lng: -74.0400 + (Math.random() * 0.02 - 0.01),
        rating: 0,
        reviews: []
    };
    
    businesses.push(newBiz);
    saveData();
    
    document.getElementById("businessName").value = "";
    document.getElementById("businessCategory").value = "";
    document.getElementById("businessAddress").value = "";
    document.getElementById("businessPhone").value = "";
    document.getElementById("businessHours").value = "";
    document.getElementById("businessDesc").value = "";
    
    renderBusinessGrid();
    renderAdminList();
    showToast(`✨ "${name}" added!`);
}

function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>]/g, function(m) {
        if (m === "&") return "&amp;";
        if (m === "<") return "&lt;";
        if (m === ">") return "&gt;";
        return m;
    });
}

function setupEventListeners() {
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
    
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderBusinessGrid();
        });
    });
    
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
    
    document.getElementById("addBusinessBtn").addEventListener("click", addBusiness);
    
    document.querySelector(".close").addEventListener("click", () => {
        document.getElementById("detailModal").classList.add("hidden");
    });
    
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("detailModal")) {
            document.getElementById("detailModal").classList.add("hidden");
        }
    });
}

// Clear old localStorage to force fresh data
localStorage.removeItem("localhub_businesses");
localStorage.removeItem("localhub_nextId");

loadData();
setupEventListeners();
renderBusinessGrid();
document.addEventListener('DOMContentLoaded', function() {
    // Modal Elements
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementById('close-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Project Details
    const projectDetails = [
        {
            title: "Image Gallery Project",
            description: "This project features an image gallery showcasing 9 images, each representing a different pilgrimage destination. When you click on any image, it will open the respective website, allowing you to conveniently proceed with online booking for that pilgrimage.",
            image: "img2.png" // Modal image
        },
        {
            title: "Online Job Application",
            description: "Welcome to the Online Job Application! On the first page, you'll find the details you'll need to complete the application. Just click on the Details Needed button to view them. Once you're ready, hit the Register button, and you'll be directed to the job application form where you can fill it out and submit your application.",
            image: "img4.png"
        },
        {
            title: "Ecommerce Website",
            description: "Welcome to our eCommerce platform, where shopping is made easy and exciting! Start by exploring 4 exciting categories: Electronics, Cosmetics, Clothes, and Shoes. Click on any category to discover a curated selection of top brands and products. Once you've found what you love, simply add them to your cart and get ready for a seamless shopping experience. Happy shopping!",
            image: "img6.png"
        }
    ];

    // Open Modal
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const project = projectDetails[index];
            // Use the image from projectDetails instead of the thumbnail
            modalImg.src = `${window.location.origin}/static/images/${project.image}`;
            modalTitle.textContent = project.title;
            modalText.textContent = project.description;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close Modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

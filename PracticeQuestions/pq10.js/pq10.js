// pq10.js

document.addEventListener('scroll', function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrollPercentage = (window.scrollY / scrollableHeight) * 100;
    
    document.getElementById('progress').style.width = scrollPercentage + '%';
});

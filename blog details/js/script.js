document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai dari form
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    // Membuat elemen baru untuk komentar
    var commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');

    // Menambahkan struktur komentar
    commentItem.innerHTML = `
        <img src="../../landing page/assets/images/icons/fb.png">
        <div class="comment-content">
            <span class="comment-name">${name}</span>
            <span class="comment-date">${new Date().toLocaleDateString()}</span>
            <p>${comment}</p>
        </div>
    `;

    // Menambahkan komentar ke dalam list
    document.getElementById('comments-list').appendChild(commentItem);

    // Mengosongkan form setelah komentar ditambahkan
    document.getElementById('comment-form').reset();
});
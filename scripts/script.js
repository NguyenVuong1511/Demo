var userInputValue = ''; // Biến để lưu giá trị từ trường input

document.getElementById('myForm').addEventListener('submit', function(event) {
    // Ngăn chặn hành vi mặc định của form (tải lại trang)
    event.preventDefault();
    
    // Thực hiện xử lý form tại đây (nếu cần)
    document.getElementById('inputs').value = '';
});
function handleEnter(event) {
    if (event.key === 'Enter') {
         // Lưu giá trị từ trường input vào biến
        userInputValue = document.getElementById('inputs').value;
        // Sau khi lưu giá trị, có thể làm các xử lý khác ở đây
        }
}
function onClick() {
    userInputValue = document.getElementById('inputs').value;
}
var slider = document.getElementById('slider');
var status = document.getElementById('status');

slider.addEventListener('input', function () {
    var Giatri = slider.value;
    if (Giatri == 100 && userInputValue == '') {
        alert("Bạn quên chưa nhập tên kìa (^.^)");
        slider.value = 0;
    }
    if (Giatri == 100 && userInputValue != '') {
        // Thay đổi link CSS
        var styleLink = document.getElementById('style-link');
        styleLink.setAttribute('href', './styles/newstyle.css');

        // Thêm thẻ div
        var newDiv = document.createElement('div');
        newDiv.textContent = 'Merry christmas';
        newDiv.classList.add('Mr');
        document.body.appendChild(newDiv);

        var newDiv1 = document.createElement('div');
        newDiv1.textContent = 'Chúc ' + userInputValue + ' giáng sinh an lành.';
        newDiv1.classList.add('Chuc');
        document.body.appendChild(newDiv1);

        // Tạo thẻ audio
        var audio = document.createElement("audio");
        audio.autoplay = true;
        audio.loop = true;

        // Tạo thẻ source
        var source = document.createElement("source");
        source.src = "Music.mp3";
        source.type = "audio/mp3";

        // Thêm thẻ source vào thẻ audio
        audio.appendChild(source);

        // Thêm thẻ audio vào body hoặc bất kỳ phần tử nào khác trong DOM
        document.body.appendChild(audio);


        // Xoá bỏ hai thẻ div ban đầu
        var elementsToRemove = document.getElementsByClassName('wrapper');
        Array.from(elementsToRemove).forEach(function(element) {
            element.remove();
        });
        var elementsToRemove = document.getElementsByClassName('slider-container');
        Array.from(elementsToRemove).forEach(function(element) {
            element.remove();
        });

    }
    slider.addEventListener('mouseup', function () {
         // Thiết lập giá trị về giá trị mặc định khi thả chuột
        slider.value = 0;
    });
});
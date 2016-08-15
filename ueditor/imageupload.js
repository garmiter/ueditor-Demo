$(function () {
    $(document.body).append('<div style="display:none;" id="webuploader-filePicker">选择图片</div>');
    var uploader = WebUploader.create({

        // 选完文件后，是否自动上传。
        auto: true,

        // swf文件路径
        swf: 'third-party/webuploader/Uploader.swf',

        // 文件接收服务端。
        server: "http://ueditor.baidu.com/ueditor/php/controller.php",

        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#webuploader-filePicker',

        duplicate: true,
        // 只允许选择图片文件。
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
        }
    });

    // 当有文件添加进来的时候
    uploader.on('fileQueued', function (file) {

    });
    uploader.on('uploadBeforeSend', function (object, data, header) {

    });
    // 文件上传过程中创建进度条实时显示。
    uploader.on('uploadProgress', function (file, percentage) {

    });

    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
    uploader.on('uploadSuccess', function (file, response) {
        CallBackMethod("<img src='" + response.value + "' />", CallBackObj);
    });

    // 文件上传失败，显示上传出错。
    uploader.on('uploadError', function (file, response) {
        CallBackMethod("<img src='http://ueditor.baidu.com/server/ueditor/upload/image/demo.jpg' />服务器请求失败，请配置图片接收服务端地址,配置地址要写在当前页面的webuploader中的server处，error:" + response, CallBackObj);
    });

    // 完成上传完了，成功或者失败，先删除进度条。
    uploader.on('uploadComplete', function (file) {

    });

});


CallBackMethod = {};
CallBackObj = {};
function UploadImageByGarmiter(obj, func) {
    CallBackMethod = func;
    CallBackObj = obj;
    $("#webuploader-filePicker input[name=file]").click();
}
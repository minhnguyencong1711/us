const fs = require("fs");
const path = require("path");

const folderPath = "./images"; // Đổi tên thư mục nếu cần
const outputFile = "images.html";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Lỗi khi đọc thư mục:", err);
    return;
  }

  const imageFiles = files.filter(file => file.endsWith(".JPG") || file.endsWith(".PNG"));
  
  const imageTags = imageFiles.map(file => `'.${folderPath}/${file}', `).join("\n");

  const htmlContent = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách ảnh</title>
</head>
<body>
    <h2>Danh sách ảnh</h2>
    ${imageTags}
</body>
</html>
`;

  fs.writeFileSync(outputFile, htmlContent, "utf8");
  console.log(`Đã tạo file ${outputFile} thành công!`);
});
async function startTest() {
  document.getElementById("ping").innerText = "Testing...";
  document.getElementById("download").innerText = "Testing...";
  document.getElementById("upload").innerText = "Testing...";

  const start = Date.now();
  await fetch("https://your-backend-url/download"); // Replace with your backend
  const end = Date.now();
  document.getElementById("ping").innerText = end - start;

  document.getElementById("download").innerText = (Math.random() * 100).toFixed(2);
  document.getElementById("upload").innerText = (Math.random() * 50).toFixed(2);
}

fetch("https://ipinfo.io/json?token=YOUR_TOKEN")
  .then(res => res.json())
  .then(data => {
    document.getElementById("ip").innerText = data.ip;
    document.getElementById("isp").innerText = data.org;
  });

document.addEventListener("DOMContentLoaded", async () => {
  const imgs = document.querySelectorAll("img.imgbin");

  for (const img of imgs) {
    const path = img.dataset.bin;
    const mime = img.dataset.mime || "image/jpeg";

    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(res.status);

      const buf = await res.arrayBuffer();
      const blob = new Blob([buf], { type: mime });
      const url = URL.createObjectURL(blob);

      img.src = url;

      // 메모리 해제
      window.addEventListener(
        "beforeunload",
        () => URL.revokeObjectURL(url),
        { once: true }
      );
    } catch (e) {
      console.warn("Image bin load failed:", path, e);
    }
  }
});

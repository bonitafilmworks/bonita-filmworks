/* ------------------------------------------------------------------
   YouTube fallback for local file:// previews
   YouTube requires an http(s) referrer, so an embed opened straight
   from disk shows "Error 153: Video player configuration error".
   On the deployed site the normal iframe is kept and plays inline.
   ------------------------------------------------------------------ */

(() => {
  if (location.protocol !== "file:") return;

  document.querySelectorAll(".project__media iframe").forEach((frame) => {
    const match = frame.getAttribute("src").match(/embed\/([\w-]+)/);
    if (!match) return;

    const id = match[1];
    const link = document.createElement("a");
    link.className = "video-fallback";
    link.href = "https://www.youtube.com/watch?v=" + id;
    link.target = "_blank";
    link.rel = "noopener";

    const img = document.createElement("img");
    img.src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
    img.alt = "";
    img.loading = "lazy";

    const play = document.createElement("span");
    play.className = "video-fallback__play";
    play.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "visually-hidden";
    label.textContent = "Watch on YouTube (opens in a new tab)";

    link.append(img, play, label);
    frame.replaceWith(link);
  });
})();

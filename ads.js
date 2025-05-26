// ads.js - Ad code for your converter
function loadAds() {
  // Top Ad
  document.write(`
    <div class="ad-container">
      <div class="ad-label">Advertisement</div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5117734305838946"><\/script>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-5117734305838946"
           data-ad-slot="1830029329"
           data-ad-format="auto"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
    </div>
  `);

  // Middle Ad (after upload section)
  document.write(`
    <div class="ad-container">
      <div class="ad-label">Advertisement</div>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-5117734305838946"
           data-ad-slot="1830029329"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
    </div>
  `);

  // Bottom Ad
  document.write(`
    <div class="ad-container">
      <div class="ad-label">Advertisement</div>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-5117734305838946"
           data-ad-slot="1830029329"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
    </div>
  `);
}

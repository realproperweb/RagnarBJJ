// =====================================================================
// ATHLETE CONFIG
// =====================================================================
// For each platform, publish a Google Sheet tab to the web as CSV:
//   File → Share → Publish to web → select the tab → CSV → Publish
// Paste that CSV link below as csvUrl.
//
// Each sheet needs ONE column of data with a header row:
//   - Recommended header: "url"      → paste the full post/video link
//   - Also supported:      "reel_id" → paste just the numeric/alphanumeric ID
//
// profileUrl is optional — if set, it adds a link chip under the bio.
// =====================================================================

window.ATHLETE_CONFIG = {
  platforms: {
    facebook: {
      csvUrl: 'PASTE_FACEBOOK_SHEET_CSV_LINK_HERE',
      profileUrl: 'https://www.facebook.com/profile.php?id=61575924220121'
    },
    tiktok: {
      csvUrl: 'PASTE_TIKTOK_SHEET_CSV_LINK_HERE',
      profileUrl: 'https://www.tiktok.com/@ragnar_bjj'
    },
    youtube: {
      csvUrl: 'PASTE_YOUTUBE_SHEET_CSV_LINK_HERE',
      profileUrl: 'https://www.youtube.com/@ragnar_bjj'
    }
  }
};

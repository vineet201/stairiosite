const config = window.CARD_CONFIG || {};
const fallbackProfile = {
  id: 'default',
  name: 'Shivam Srivastava',
  role: 'Chief Strategic Communications Officer',
  phone: '+91 95828 16233',
  email: 'growth@stairio.com'
};
const fallbackCompany = {
  brand: 'STAIRIO',
  tagline: 'Every Dream Needs a Step',
  website: 'www.stairio.com',
  legalName: 'Stairio Technologies Private Limited',
  footerName: 'STAIRIO Technologies Pvt. Ltd.'
};

const configuredProfiles = Array.isArray(config.profiles) && config.profiles.length
  ? config.profiles
  : [config.profile || fallbackProfile];

const profiles = configuredProfiles.map((p) => ({ ...fallbackProfile, ...(p || {}) }));
const company = { ...fallbackCompany, ...(config.company || {}) };

// Optional URL params can override profile details.
const params = new URLSearchParams(window.location.search);
const profileFromQuery = params.get('p') || params.get('profile');
const defaultProfileId = config.defaultProfileId || profiles[0].id;
const selectedProfile = profiles.find((p) => p.id === profileFromQuery)
  || profiles.find((p) => p.id === defaultProfileId)
  || profiles[0];

const data = {
  name: params.get('name') || selectedProfile.name,
  role: params.get('role') || selectedProfile.role,
  phone: params.get('phone') || selectedProfile.phone,
  email: params.get('email') || selectedProfile.email
};

// Populate fields.
document.getElementById('fn-name').textContent = data.name;
document.getElementById('fn-phone').textContent = data.phone;
document.getElementById('fn-email').textContent = data.email;
document.getElementById('fn-website').textContent = company.website;

document.getElementById('brand-wordmark-front').textContent = company.brand;
document.getElementById('brand-wordmark-back').textContent = company.brand;
document.getElementById('brand-tagline-front').textContent = company.tagline;
document.getElementById('brand-tagline-back').textContent = company.tagline;
document.getElementById('back-url').textContent = company.website;
document.getElementById('back-company').textContent = company.legalName;
document.getElementById('card-footer').innerHTML = 'Digital Business Card &nbsp;·&nbsp; ' + company.footerName;
document.getElementById('page-title').textContent = data.name + ' — ' + company.brand;

document
  .querySelector('meta[name="description"]')
  .setAttribute('content', data.name + ' — ' + data.role + ' at ' + company.legalName);
document
  .querySelector('meta[property="og:title"]')
  .setAttribute('content', data.name + ' · ' + company.brand);
document
  .querySelector('meta[property="og:description"]')
  .setAttribute('content', data.role);

// Role: wrap at word boundary for long titles.
const roleEl = document.getElementById('fn-role');
const words = data.role.split(' ');
const mid = Math.ceil(words.length / 2);
roleEl.innerHTML = words.slice(0, mid).join(' ') + '<br>' + words.slice(mid).join(' ');

// Build stair marks.
function buildMark(el, heights, width) {
  el.innerHTML = '';
  heights.forEach((h) => {
    const s = document.createElement('span');
    s.style.cssText = `height:${h}px;width:${width}px`;
    el.appendChild(s);
  });
}
buildMark(document.getElementById('front-mark'), [5, 8, 11, 15], 3);
buildMark(document.getElementById('back-mark'), [8, 13, 18, 24], 5);

// Flip logic.
let flipped = false;
const inner = document.getElementById('cardInner');
const hint = document.getElementById('hint');

document.getElementById('scene').addEventListener('click', () => {
  flipped = !flipped;
  inner.classList.toggle('flipped', flipped);
  hint.classList.add('hidden');
});

// Share card.
function buildURL() {
  const base = window.location.origin + window.location.pathname;
  // Use profile path URL for accurate social metadata previews.
  if (!selectedProfile.id) {
    return base;
  }
  return window.location.origin + '/vc/' + encodeURIComponent(selectedProfile.id);
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

window.shareCard = function shareCard() {
  const url = buildURL();
  if (navigator.share) {
    navigator
      .share({
        url
      })
      .catch(() => {});
  } else {
    copyToClipboard(url);
    showToast('Link copied to clipboard');
  }
};

// Save contact (vCard).
window.saveContact = function saveContact() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:' + data.name,
    'ORG:' + company.legalName,
    'TITLE:' + data.role,
    'TEL;TYPE=CELL:' + data.phone,
    'EMAIL:' + data.email,
    'URL:https://' + company.website.replace(/^https?:\/\//, ''),
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = data.name.replace(/\s+/g, '_') + '.vcf';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Contact saved');
};

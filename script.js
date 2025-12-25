const facebook = document.getElementById("facebook");
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const facebookSpan = document.getElementById("facebook-sapn");
const linkedinSpan = document.getElementById("linkedin-sapn");
const githubSpan = document.getElementById("github-sapn");
const email = document.getElementById("email");
const cv = document.getElementById("cv");
const header = document.getElementById("Header");
const emailSpan = document.getElementById("email-sapn");
const cvSpan = document.getElementById("cv-sapn");
const headerSpan = document.getElementById("header-sapn");
const head = document.querySelector('header');
const first = document.getElementById("header"); 
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const react = document.getElementById('react');
const php = document.getElementById('php');
const sql = document.getElementById('sql');
const java = document.getElementById('java');
const mongodb = document.getElementById('mongodb');
const flutter = document.getElementById('flutter');
const arduino = document.getElementById('arduino');
const c = document.getElementById('c');
const python = document.getElementById('python');
const git= document.getElementById('git');
const linux = document.getElementById('linux');
const node = document.getElementById('node');
const mongodbSpan = document.getElementById('mongodb-span');
const htmlSpan = document.getElementById('html-span');
const arduinoSpan = document.getElementById('arduino-span');
const cssSpan = document.getElementById('css-span');
const jsSpan = document.getElementById('js-span');
const reactSpan = document.getElementById('react-span');
const phpSpan = document.getElementById('php-span');
const sqlSpan = document.getElementById('sql-span');
const javaSpan = document.getElementById('java-span');
const cSpan = document.getElementById('c-span');
const pythonSpan = document.getElementById('python-span');
const nodeSpan = document.getElementById('node-span');
const gitSpan = document.getElementById('git-span');
const flutterSpan = document.getElementById('flutter-span');
const linuxSpan = document.getElementById('linux-span');
const skills= document.getElementById('skills');
const home = document.getElementById('home');
const skil = document.getElementById('skil');
const project = document.getElementById('project');
const projects = document.getElementById('projects');
const educations = document.getElementById('educations');
const education = document.getElementById('education');
const contacts = document.getElementById('contacts');
const contact = document.getElementById('contacte');
const p1 = document.getElementById('p1');
const p1Overlay = document.getElementById('p1-overlay');
const p2 = document.getElementById('p2');
const p2Overlay = document.getElementById('p2-overlay');
const p3 = document.getElementById('p3');
const p3Overlay = document.getElementById('p3-overlay');
const p4 = document.getElementById('p4');
const p4Overlay = document.getElementById('p4-overlay');
const p5 = document.getElementById('p5');
const p5Overlay = document.getElementById('p5-overlay');
facebook.addEventListener('mouseenter', () => {
    facebookSpan.style.opacity = '1';    
})
facebook.addEventListener('mouseleave', () => {
    facebookSpan.style.opacity = '0';
})
linkedin.addEventListener('mouseenter', () => {
    linkedinSpan.style.opacity = '1';    
})
linkedin.addEventListener('mouseleave', () => {
    linkedinSpan.style.opacity = '0';
})
github.addEventListener('mouseenter', () => {
    githubSpan.style.opacity = '1';    
})
github.addEventListener('mouseleave', () => {
    githubSpan.style.opacity = '0';
})
email.addEventListener('mouseenter', () => {
    emailSpan.style.opacity = '1';    
})
email.addEventListener('mouseleave', () => {
    emailSpan.style.opacity = '0';
})
cv.addEventListener('mouseenter', () => {
    cvSpan.style.opacity = '1';    
})
cv.addEventListener('mouseleave', () => {
    cvSpan.style.opacity = '0';
})
header.addEventListener('mouseenter', () => {
    headerSpan.style.opacity = '1';    
})
header.addEventListener('mouseleave', () => {
    headerSpan.style.opacity = '0';
})
header.addEventListener('click', () => {
    let icon = document.querySelector('.fad-in');
    icon.style.opacity = '0';
    setTimeout(()=>{
        if (head.style.top == '100%') {
            head.style.top = '90%';
            header.innerHTML = '<i class="fa-solid fad-in fa-eye"></i>';
        }
        else {
            head.style.top = '100%';
            header.innerHTML = '<i class="fa-solid fad-in fa-eye-slash"></i>';
        }
        icon = document.querySelector('.fad-in');
        setTimeout(()=>{
            icon.style.opacity = '1';
        },10);
    },200);
    
})
const scrollTop = document.getElementById("scrolltop");
scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
html.addEventListener('mouseenter',()=>{
    htmlSpan.style.opacity = '1';
    html.style.color = '#EF6939';
})
html.addEventListener('mouseleave',()=>{
    htmlSpan.style.opacity = '0';
    html.style.color = 'gray';
})
css.addEventListener('mouseenter',()=>{
    cssSpan.style.opacity = '1';
    css.style.color = '#35A8E8'
})
css.addEventListener('mouseleave',()=>{
    cssSpan.style.opacity = '0';
    css.style.color = 'gray';
})
js.addEventListener('mouseenter',()=>{
    jsSpan.style.opacity = '1';
    js.style.color = '#F7DF1E'
})
js.addEventListener('mouseleave',()=>{
    jsSpan.style.opacity = '0';
    js.style.color = 'gray';
})
react.addEventListener('mouseenter',()=>{
    reactSpan.style.opacity = '1';
    react.style.color = '#61DAFB'
})
react.addEventListener('mouseleave',()=>{
    reactSpan.style.opacity = '0';
    react.style.color = 'gray';
})
node.addEventListener('mouseenter',()=>{
    nodeSpan.style.opacity = '1';
    node.style.color = '#83CD29'
})
node.addEventListener('mouseleave',()=>{
    nodeSpan.style.opacity = '0';
    node.style.color = 'gray';
})
mongodb.addEventListener('mouseenter',()=>{
    mongodbSpan.style.opacity = '1';
    mongodb.style.color = '#47A248'
})
mongodb.addEventListener('mouseleave',()=>{
    mongodbSpan.style.opacity = '0';
    mongodb.style.color = 'gray';
})
php.addEventListener('mouseenter',()=>{
    phpSpan.style.opacity = '1';
    php.style.color = 'purple'
})
php.addEventListener('mouseleave',()=>{
    phpSpan.style.opacity = '0';
    php.style.color = 'gray';
})
flutter.addEventListener('mouseenter',()=>{
    flutterSpan.style.opacity = '1';
    flutter.style.color = '#02569B'
})
flutter.addEventListener('mouseleave',()=>{
    flutterSpan.style.opacity = '0';
    flutter.style.color = 'gray';
})
arduino.addEventListener('mouseenter',()=>{
    arduinoSpan.style.opacity = '1';
    arduino.style.color = '#00979D'
})
arduino.addEventListener('mouseleave',()=>{
    arduinoSpan.style.opacity = '0';
    arduino.style.color = 'gray';
})
sql.addEventListener('mouseenter',()=>{
    sqlSpan.style.opacity = '1';
    sql.style.color = '#FFC23C'
})
sql.addEventListener('mouseleave',()=>{
    sqlSpan.style.opacity = '0';
    sql.style.color = 'gray';
})
java.addEventListener('mouseenter',()=>{
    javaSpan.style.opacity = '1';
    java.style.color = '#E82E2D'
})
java.addEventListener('mouseleave',()=>{
    javaSpan.style.opacity = '0';
    java.style.color = 'gray';
})
c.addEventListener('mouseenter',()=>{
    cSpan.style.opacity = '1';
    c.style.color = '#085E9F'
})
c.addEventListener('mouseleave',()=>{
    cSpan.style.opacity = '0';
    c.style.color = 'gray';
})
python.addEventListener('mouseenter',()=>{
    pythonSpan.style.opacity = '1';
    python.style.color = '#39719C'
})
python.addEventListener('mouseleave',()=>{
    pythonSpan.style.opacity = '0';
    python.style.color = 'gray';
})
git.addEventListener('mouseenter',()=>{
    gitSpan.style.opacity = '1';
    git.style.color = '#F05032'
})
git.addEventListener('mouseleave',()=>{
    gitSpan.style.opacity = '0';
    git.style.color = 'gray';
})
linux.addEventListener('mouseenter',()=>{
    linuxSpan.style.opacity = '1';
    linux.style.color = 'black'
})
linux.addEventListener('mouseleave',()=>{
    linuxSpan.style.opacity = '0';
    linux.style.color = 'gray';
})
function isPartiallyInView(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight -150 &&
    rect.bottom > 150
  );
}
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.left >= 0 &&
    rect.top <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}
const skill = document.querySelectorAll('.view');
if (isPartiallyInView(header)) {
        home.className = 'active';
    }
window.addEventListener('scroll',()=>{
    for(let i=0;i<skill.length;i++ ) {
        if(isPartiallyInView(skill[i])){
            skill[i].style.opacity = '1';
            skill[i].style.transform = 'translateY(0px)';
        }
        else{
            skill[i].style.opacity = '0';
            skill[i].style.transform = 'translateX(-100px)';
        }
    };
    if (isInViewport(first)) {
        home.className = 'active';
    }else{
        home.className = '';
    }
    if (isInViewport(skills) && !isInViewport(first)) {
        skil.className = 'active';
    }else{
        skil.className = '';
    }
    if (isInViewport(projects) && !isInViewport(skills)) {
        project.className = 'active';
    }
    else{
        project.className = '';
    }
    if(isInViewport(educations) && !isInViewport(projects)){
        education.className = 'active';
    }
    else{
        education.className = '';
    }
    if(isInViewport(contacts) && !isInViewport(educations)){
        contact.className = 'active';
    }
    else{
        contact.className = '';
    }
    const scrollY = window.scrollY;
    if (scrollY > 50) {
         scrollTop.className='activephone';
    } else {
        scrollTop.className='';
    }  
})
p1.addEventListener('mouseenter',()=>{
    p1Overlay.style.opacity = '1';
})
p1.addEventListener('mouseleave',()=>{
    p1Overlay.style.opacity = '0';
})
p2.addEventListener('mouseenter',()=>{
    p2Overlay.style.opacity = '1';
})
p2.addEventListener('mouseleave',()=>{
    p2Overlay.style.opacity = '0';
})
p3.addEventListener('mouseenter',()=>{
    p3Overlay.style.opacity = '1';
})
p3.addEventListener('mouseleave',()=>{
    p3Overlay.style.opacity = '0';
})
p4.addEventListener('mouseenter',()=>{
    p4Overlay.style.opacity = '1';
})
p4.addEventListener('mouseleave',()=>{
    p4Overlay.style.opacity = '0';
})
p5.addEventListener('mouseenter',()=>{
    p5Overlay.style.opacity = '1';
})
p5.addEventListener('mouseleave',()=>{
    p5Overlay.style.opacity = '0';
})

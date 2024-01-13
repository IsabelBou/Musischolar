<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IsabelBou/Musischolar">
    <img src="src/assets/Musischolar.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Musischolar (WIP)</h3>

  <p align="center">
    Web application meant to store interactive conservatory notes.
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#see-also">See Also</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
<a name="about"></a>
## About The Project
ReactJS app meant to store interactive conservatory notes using Chakra-UI. 
The music sheets are rendered into SVG with Verovio using custom MEI files (XML-based music encoding).
Verovio is also capable of producing MIDI files that are played using JZZ.js MIDI library.
<br />
<p align="center"><b>This is still a work in progress.</b></p>


### Built With
<a name="built-with"></a>
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![Verovio](https://img.shields.io/badge/verovio-verovio-black?style=for-the-badge&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADKklEQVR4AbyVA6xlPRCA39Vv2zbWtm3btm3Fa9u2bdu2bevu9zbTZHLS2%2FWe5Mu001F5ol7nlzFjxmgC4M%2BQIcPrSyrS59XDiwVlFibQ4zY47aX9PXzx3Ik13s%2Bm10UxVgzWwwz0CV259AxfuFjpp4AzECZuGLkG%2BYUzAAY2%2FZ9QGJpAVxgCo7EdhmwK%2F3iLULMPC6aIHK7Kvfq0MBz243wGuRNWwAyYhG6BzHAt%2FGw5L1%2FQnimJo7kHdZz7KP2fYCDcxPk8sjMyC%2FIf5GfwliTwo5sjs0seYUt%2FZXwqhIVKT0qeHY6I8WAC%2FOLYsnJwDTpB0HEQAzBbYqZwXZeqar8qeuxCEDCBkTno30UOhYCOZyTos7UWuQU%2B1EF9ql1Hkj%2FAOI%2FSB8GvZ4X8Ht1O5AoTUJJYVxX9QAhDDp3cr9rVICwU0gXqoErfFi5AfBPLk1yvSHtJ3jjSsueC%2B5K8sU4e4SV8i%2FZi6KVm6BNp%2FB5L6CJx2ylbf5TZM%2BS%2FDO4Ro%2FEQMs6O9z0GbINS0g96fYj7OUyS69fAeuBpvAHDJPkZiOv6YaiZZZHDlE2dcJ08ljy9t6BYxBeWTm6U5nVq652po4DisAmSSeCAjgkn4Tj6VNbbJk7vo5gms99L%2Fw8xcl1RnzqwGyCGx7aO3KD1yD%2Bty66UCTG8LgV0tSX0OqsCGuC7Bn5Vdm0k1iz0nzuTywpUF4ebkMOT9HOIgc07Sq1PenO5%2Fx%2BIfWuJNQ7edW6lGuwqTtsI9pVnrBNchRwRCohOOEfaxSAsP6a3I6yctYD%2B4rjQMjZaissZ4RC2hMX4F4ITtFfCJ%2FqkI91FoGglBcyyFDAD1sOndHVAswKN1O3ZAb95V0mS%2B1wFxMX4AXI%2FhJS%2BhhzOIiYgeN%2F5FmAKyKpXSBKrot3bUAOuyN8snbzvd2EsffO6mRfTdn46KJ1fpOsqW29DJdiH0W24DMPNoUT6LVfwI%2FQLkQfgB51cbZc1qeuB%2BRUKQxqzh9rGFCMyCfpj0FCNee213l2AY2W89gG1bevgW70y7s9dhDO5ZY%2FTQH5t%2B3o%2B%2B6pEPRr9AGa6oacjMPuFQx4AAB7yBJCIfxUpAAAAAElFTkSuQmCC&label=%20&link=https%3A%2F%2Fwww.verovio.org%2Findex.xhtml)
* ![JZZ.js](https://img.shields.io/badge/JZZ.js-JZZ.js-%23D69432?style=for-the-badge&logoColor=%23D69432&label=%20&link=https%3A%2F%2Fjazz-soft.net%2Fdoc%2FJZZ%2F)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap
<a name="roadmap"></a>

- [x] Basics
  - [x] Render MEI files into SVG using Verovio
  - [x] Create basic components for music SVG and relevant information display
  - [x] Render MEI files into MIDI
  - [x] Play MIDI files using jzz.js library
  - [x] Visualize MIDI playing on sheet (Can be improved)
- [ ] User Preferences
  - [x] Create global Dark/Light mode toggle
  - [ ] Create global tempo selector as slider
  - [x] Create global tonality selector
- [x] Navigation
  - [x] Responsive App Shell
  - [x] Implement React Router
- [ ] Content
  - [ ] Structure studyable conservatory content for routing
  - [ ] Encode MEI files for every topic to be covered
  - [x] Add context-relevant tags to MEI files for dynamic modification
- [ ] Quality
  - [x] Grant responsiveness
  - [ ] Verify accessibility
- [ ] Hosting
  - [ ] Set up GitHub Pages


* Low Priority features and Enhancements:
  - Match mouse coordinates and note id (for on-demand midi playback repositioning or highlighting)
  - Tonality selector as wheel menu ([fifths circle](https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Circle_of_fifths_deluxe_4.svg/1024px-Circle_of_fifths_deluxe_4.svg.png))
  - AppShell fixed footer as piano keyboard, showing played notes acording to MIDI.
  - Sinusoidal chart with [note frequencies](https://upload.wikimedia.org/wikipedia/commons/a/ad/Piano_key_frequencies.png) in Harmony class' notes

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### See Also
<a name="see-also"></a>

* [Music Encoding Initiative (MEI)](https://github.com/music-encoding) - About the Music Encoding Initiative
* [MEI project file repository](https://github.com/IsabelBou/MusischolarMeiFiles) - Custom MEI files used in the app.
* [W3C Quick reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1) - Web Content Accessibility Guidelines (WCAG)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


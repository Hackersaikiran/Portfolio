import avmLogo from "../images/avm.jpg";
import Wpic from "../images/weather_app.png";
import FTPpic from "../images/FTP.png";
import Apic from "../images/Apic.png";
import chrpic from "../images/chrpic.png";
import Cpic from "../images/Cpic.png";
import dPic from "../images/dPic.webp";
export const Bio = {
  name: "Saikiran",
  roles: [
    "Full Stack Developer",
    "Android Developer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Hackersaikiran",
  resume:
    "https://drive.google.com/file/d/1_PnEtZoLgy-DyRVd18kYB0U-w8GiW67Q/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/saikiran18/",
  
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEWCgoL////l5eXk5OTm5ubu7u74+Pj19fXx8fH7+/vr6+t+fn52dnZ7e3t8fHzz8/OGhoaTk5Pa2tq3t7e7u7utra3Q0NCZmZnFxcWkpKSMjIzKysqpqanX19e/v7+dnZ1ra2tH/Sn9AAASPElEQVR4nOVdbZuyKhBWwTcErcxqa7fO//+VB9RKGF6tdvWc+bLPNY+m48DMzc0AURzHWYKTjP9FOEn5nzTBaKJNPLW5UYtxQozawqYtH1o8V4ui/4eFKEG9hcn4fgmaqU2S0ZaHNndpi0Fbjlr8Ni0atVGWZXmapjn/y/8U/E/B//6etnmnttFoI/4BemcgxUVBWuLS8iaES/6XENLwPw1vSpPPngzXPj67TYtDtIhrI6ztZm/pkuKZDbcpLgt0uV73+7b74tJ1bdterztUZDgl5Se6JJpoP+ZD/uNNnKNTdztHlFJWV7LUjCuj8609oIx/hfRzPvxI3yqanBzaIzeNGxbZpKq4pdG2PeBcdKKXepyhH747lgotut4iyuymKYYyGt1O6aRpvi+WvrXzYZKSXbehDscZrKxp1F1wms7sfNZ8iAa/oLGbIeSjJRrt9RjmO+hLtj31HkDD+6GhS6Kxm3losaKNAs0yG9uQ042+Yt1dano8lS+ahT6QLUjH2BvMG42sOxKTt2WLV8MLwqT42b7FfU+p6PYkUunrQSd6PUU0pK3e576nsKgl8euJQ84W4ck/IWj/UmyxScW+EQlO/gi9M1vkqPuYfYONXfGWbDHbh+1H7Rts3AdCNUX7Qj/M8lNUf9g+IXV0KssX+uH8WIo2n4gvOmFnFAjVprF0bj7Mvukv2SeEfudkbj6cBdUScnhz/nMJ745kHoCbh0uz2286cBB2K3NvqDbFpeHZAse/7cBBKnpKfZvmS1wbSY6/78BB2FGid/wAXPAYvznMGvy9R6rqEH+Ya0ua6185cBDaEm1eQO/i2vDxt3KgSdgRuUmA2Vwb2W3+roXepdqgIAAX0g/zw187cBB2yD/DtaXt33bBp/DO6IBqs0ZP6dcyPCiEfZXeAM4b0xTH3xhH+Aq72aHaFNP4RRqcnP8+xkylOqO3ZguMFhBEZRlCqgmqhXJtJdr8tUE6yd/GtZVkaQ4cJS0n75tqE0fqw7VhtFADo2j3Fq4NL7OJ9rJ5C9eWLNdAHlHdAM7ZD/OFpQlZqm2hQrU8kGtLj0s2kJt4dAE4Rz5Mv5aEZHRS6wCcP9eWt8vBoiahJzuAs0YacljKaMIm9IKtkcaWLXbL96AQtsMWAGcZHyZ4wXlCkk0410Z6Vm3hYfQp1TZWoJoX19Zc19FGhbCOhI+e8M8aosxd6CGYa8PJX790mFTBXFu8mk44SHUsIdeW27i2VWTCqdALCeHakmxtBnITrflQ5drIbV1ttJctCeDaVtdGhdCDPtLossUK26gQmjW+XNv3Ctsol+o7s3NtZEwcGVqnC7kTf0YriJ1ry9cCuKGc/bi203rwqCrs4sW1/fVrviKVB9fWtEtnZmxSt42La0vQetuoELZzcW2kW2emuEvVObm2dbtQpH0719bs1+1CkfaJbWyBydpdyIONNVuQdu0u5E5sCeTaSErEGJ+kxfoN5CYWI9c2ADh59PQT3EjF4roqOh+3x/OG/5u5y/oAJvT9qup1GwO6ZD+xmWvbej5sfCSj5/ZARAMfJCM/+1tlLz5lRawI8QP61Zd649Fw5TZOTFyb57PGV2VfP6X6UCGojay/A27wI2Yr9TbjrBFFyXQEnOcj15ZnTUC2p+eDzrpRdluzjdAX8dbjuTRRbjLzuVVX5gPXlitcm3+qoEdksa935Nn4Y/SiXty42w5rlXtyy8uy2JAPfYdNbLNz2CfkZHxtmqrXXpxPPqu32PzODgau7eZnIL162Ce+4tk0StmAa13tlKrxyTp1W91kru1BknrFmaqv8PCTzvCL9bd6pYP7omqn3zmuR4lubHH1iTMUxgmLXAwvAt7YEjciTXDKHK262uPHngVPH6am9CK92j7EQPO3Zo16pY2DBoni7HrPSYUGH+OTYYzvkwxhGJxrIogcpZlaoGrgdtdPUJJDrs1j0h42LrcYmh+I/uauBS51dML+nl0Os4U73fd1HUDK5HDat/vrAWW6/zZlDQoyjomHVt1ty4R3qbocjp6cLCnr4Ovj9nzf1YND8HOrAg8hX/o3ZwDy6R8LEoUPAoo2mcy1cZDjJLqrLXj3n7OCsistmNN/O/h72lcAXd+viIlibpTEtRVO+oKpjRCddW+kATzY0BUBcuhgtBHJWxKPTtj/uPgwUj5sDG3pIaDfGFdfwJRpYA5AjNRkgUppy65M+LhPgAqJa8t97phIaUbWfKiqAk/TtaqFIGOBj+DVCe+/PeXasCsbKnGhtI/M1RczLCcCTTDeyxeCRLH3H/7s5P3asGNJk9pnXNQDxfL1hkANEYTcTtVE4dkJhdQnOVs4SbbQtkJlWGYigKgK49OpDWqi8O2EQqqWTLk20thBKZNzgE/AVj6/6TIwkJoMUoGH/Tshl2Mjc232q2Xo6zXMUrrQyQA71Qg2YcNALw0s55W5Nvv4rJZ7oRPZ9yI3sdKYW1SIkN+vVEFPQCfsfziXuDY7oqH59EmepSiKC4zVDwCVjYNKNR6XgVwuv//OteV52pgake5d/VyoRhHz0AUMpPqSOpAoQgvt6lPT2zbEUvusIZPgjHdjUbqY0UKA6HtvqXYH19RX3VAbPeRDYiWhqPQoF7ybvLrnffRHsYb3AzWNzKiAuZGnhYjYWp7Ckvh/Sya9uYUxrKV+Lr6GmihCO6GQ82jhEEttV9bSwDcgolVS80vNN4KBVKkmiqBMeJfp2MIYy4XIDSZkklhOo5YLmYPg8oej0x8tJ1xbYbNQ7k4hdZkydLPdCQdSU5lXhkaLwYeEkKK0/sRRelpISZgchK3eB4ThRLJ5FT4MpYSk5RBLbfMGlZyYgibgpHhhnX6t5O8oycyS8/7pYyzFV8tXklF3wzb+EkndyxJqxGO0RJ6Ques+6v3UQttEjmsizVcsnK8QMJAaZXYtaHWNH1xbaesicC5srji6MJyR6r/L7OKJ6ppz2/IhllotfJeBrioBzeRwPLsTit/bk2c+tI3w32ehk87TcK0vLL7iFj65Nhvwrt9mobMcSdMVZ9snIBV5cG3E9nX13WOOOOGQpp3aA7D718ZY+ksWWgeh/TvpbpptYj+svVtoA1RggDpbXPUIeug2O9TcLRR8VGHz4fv6ocNCOKXYiyONWiz8ikWx3sDT2CIN0z53loX2dzU1lrkp/x5p+mxhs1DOFqL8dqZgeywFjNRDunkZo+rSJ9dmzYfSAJz8Q2eL3UDLDLov96VYyDP+nWtrbBYyaQrihehtfx0wSfPyQ6s2e3Bt1vYjD/I+ZqHFQHNdjv0nReTyGVvINI2V75gvgP5VTJyz4vM+thgstI2AZTrzIxaqiaJQYcacEUY9+rCPpdZamvkshreoiWILaq9mpAy2688eGCy03i8nRJ/asFBRh6AnBkF4+D4yFBFPrk1OVB9YNaTSv31BLcj/wSmDNhOuzTq55k1dzxSQKHpbAIXqUUgsC82eXBvC1jeQwkBQtbuXqIliDHugnQanjOnMTGptAnKDmWuISdRCnUfGBe00MGWcpZkZ+9yTVA0V0hHZVAyXqCOKs/F/Aj/ubfRhURRNXlpBsdwRDTVc2hsvu4noiSjVU5MpCrVkJSxlVG3JbbtzbaaSnvFamVzwX1gj5xntJWqikLu56sSQGRp2kOra7F9HflP/SWDpy2hDFFMLSqSAUIN6z4BlS2Ief1LXZq/FkJup92PkGKJjaUCiUJwEeI2AlMGjx7OuLcHEfrUM3HzHFzK41IEhlSGBfVx1YsCeJESU85bJ3UI7GFN6ix//JY9pdRVboKITJK0KtFPvMoIjCalrUx/ks5uiMl+mwUKgm2mwJ+TfPA2c1rWVOQc3jtpEqtQS+MyrO9wDE4U+D6kW+i3t4TFMrCEts0ddmyPLgfIz5wkClVw0rQnAYFJLOzCD8dQvZYgZdmkNqatGGGRf05qm0b6NUhUO469viTpsp36xPFbWkDYu0AdQ4o/lMCtQ6g1dCBKFOSWrT8492ulQ5/3g2ji4yVyTCrCyPm4N/CCLADMIG6Baom4mD2A79UgZ9bXhiE3Y9lhR4kxymqmvvGPAkRWN4Iw83C8Flv5b1j2B9Q3ulEF3GKwKchMwunXNh+/oeRJuzejmW7O+FDZA4BcrbAT+dqeMTQbXkDpHRZpFM4Mnd5e9OMq42192aoFaLw0MIaBX258M5hVdA5yqfZwNxWMp7tcfYjc9UQetrnwKbB2gxTs+L2ynjtlvdhlOXcaTNaQYu9MMm2Ui3BAcLIJzDvzgMjA75mDJzDWkzDa7oJccLs2AcxTOB8Nb7CsTpmtIB66tLEjqnITmUp/1iwyNomsZteoQD2IEVNlaU0Z9SnNu1IRrG3Yc8Bsx+KzFf4huFAJ+wWtIDdvptyW/GHYc8FuPT8EKCaPkuhPaYAL3eqxm+s2Y3/r1+LodeDz3VKgA9WCQkxbzgEThSd7BdmpMGYKTePqw59rynGOcwrsmgG08ljxfIu0HA4nCm/aB7dSUMmg+GDXl2ob92vypUFZdtcn9LunecAgySBT+82bem6KIzbAM+7WFMPbifHBDvSQ+Gc+whoWyATuJwnaqJ9Aowsb92sL2GKppddwfyMSZOTmITYYsrV19x6DFTGApcqzdXm4bg/3a7uePkfBtL8UidVZtztvteRP1/7b65HzcyhL2tI1y91aHUtipX7rN/RhPuLZxvzYHqbgS+d/t11aWgmsjOf/L/6Tr33OPCahWlg23JisnXNu42/VaN0l+ipjPtZ6N8B/Z+9JyNgJZuRN7jk3esXzk2sY/Ta6hHNYkrCgGa5pC5dri+9kItvUzi5f66nM2wpqbaeV1NsLa9/NWz0Z4cG09yBFbZJTzClaXIBsyQjWMn7EUno1gX424ZKE/WDkbQbPbNcK8wfov116UiLMR7hYihWsry4L/fQA4n920Figsf0C1Jwwt5WwxJn+yosOsnsLGrQS9ziFNV3nOTBpyDumHyrk/KfTR+RQfTri2CYDLV5cU2amUrNBzbRN3ktWd2dXEmlPJrOeQ/vU7B0oSfA4pXtWZT/ez80znkHJbe65NAnAzquP/TEQZhQTVjFybfJjHarpiP/8uQTWQLTDSWJgs+bxqSTYAqk0tlLk2CcClazlLFqUqVDNzbUryX0W0EdMZKlTzOYc0WdWZzrZTq60+TMnX0k1kw7ncifkcUhnkKACuycuFY/DqFuugmpVrUwEcLIdZkFRnPVTzPZd7mHNbcs7YTDpfEnIOqQzg/toMi5igmoVrGwGcpHXVD/+dZCXWQjVs59pgg13qIUm5Eaq5uDbVwnKJDbXiBhqhmotrgwAOb5bmxuqMSzNUc3FtcvIf4s/CkoZIExaoFpYtBm0xa3PGT0l9hHnBmi2sPrwDuNtyABy7OaCamWtrLAAu3i9lpEH3LqjmwbWNWtmd12WYKBbFOaCaF9em0ZKfJfTFeufufD5cm1aLkfGUqt8Sdu7fzAHVDFybB4CLy++/bam0Hd5MhmpYhWoTrSVbID0D9/5tIwKk3yzHA6r5cW0GLbEci/dhYVuEVVCmh2qeXJsEiCba8o/SBt0X/Ttk2jcL5dqQTUt2f+BGdu6PzEy8oJo316YHcFxL9HX4n5OKtinW5AWPbGHn2sza/PabTZXeUqIHZU5tZIRqDm2TGZYbfEBYdMkAiNRDS6jVcW2q4wzaIr5algK/Typ2JcQIyt7BtVm0PP9/2saKdplf53uBazNoxe/ku9tHbazokUwDqATK9FoL1yaSKYRqd21u0hZfH7OR+6+IG/AOE1DmAeAgE2UBcIlWS1BHPxFzatohXQbwgWqhXJtdy7Njetm82ZEV3Vwx8QBl7+LaTADufm0c777e6EhGv3ZxagNlZqimal+MNA9tgsv4YFzQFSQ8uhxSgsNjiiHSvJQtplrx62i/pS/lyKqm22s2Ly+8zLX5aHmXJGKXhXqOlVXFou6EyDCE9wVl7+HaQrR5nmXodItYkJUVo9HtuhNbbweCMqfWiLyDAJxGuzt9b/stM5ztkhu37U48WDV4Bih7L9cW0iV5b2jiHJ262zmilD12B6meu4RQGp2P3QWJ0Jc+u87zF5LZnW821+YVViVtI5Ja2aDLdb/ft93X7fbVdW3b7q871GT8P6VRrQcoCw6req5tJoC7ayGk6ktXSJ/BY5KSHgoRy7VWUBYG4KxMVBCAy21aArVyI9RrZ0O1l7g2K4BLVG0+aIlR+yoo+wjX9prWC369rn0AuE9HmlTu+3rtRyPNv+c/cIe0nzmlAAAAAElFTkSuQmCC",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
  
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
      
      {
        name: "Figma",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
    ],
  },
];

export const experiences = [
  {
    
  id: 0,
  img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEVHcEwGIjcadsISdcEQdMAcd8MUdcELc78Ccb0AcbwgecUJc74Hcr4TdMAXgtcre8cbdsICcbwve8cXdsIqesYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMc78AAAAAAAAieMQAAAAfd8QAAAAXdsIAAAAAAAAJL00AAAAAAAASd8QzfMgAAAAAAADHrbZ5AAAAMHRSTlMACmeSTn////8psaTQ8xUy/7jMdf8YTyI8fLz+/+2x5nD4/5fe1zqGYZWo3sH/Q46qBhJqAAAA/0lEQVR4Aa3QRZaFMBRF0Ys7pHCH7wrMf3aVhQZp/t090Ycf4HhBEHFMkhWV0nBAp8kwDFPlsMMrqmUDjmQI2CEqcYZVf7smKrKLnubtoqH6EhCEEWDvoqn4POIkzfKiDLFRyb6HOh+cNtkiZ50r88kFrCs5+7jlsyRY2l0n5Cw88sVzibx3plVitl6WewX7fJZlor/e5WeIabLMQHR9IlNfIOzj54HZ1/F9WaEEoL/6xsS7pzcNUVWlAuKcejMRvHhtGl9WTeDZ/+UJxp1W6g58aMtqMJ4AeNd1gHe/MQaDK4ahtJ/+IxxYtOZ5UeS9N3aSfPBpcSROuu4Z4Rf+ATbgG1jbTYexAAAAAElFTkSuQmCC", // Replace with your Octanet logo or relevant image link
  role: "Web Development Intern",
  company: "Octanet Services Pvt. Ltd.",
  date: "May 2024 - Jun 2024",
  desc: "Completed a hands-on internship involving landing page and to-do list web apps, participated in learning sessions, and enhanced frontend development skills.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Frontend Design",
    "Responsive Web Design"
  ],
  doc: "https://drive.google.com/file/d/1wad1UMSzAfsO_LdkeU9ufc9Eoay_rY9T/view?usp=sharing" // Replace with your Octanet certificate or portfolio link
},
{
  id: 0,
  img: "https://yt3.googleusercontent.com/l7Pfr47b8sGLoa0m13On6sHt9STatMi3kuO0k67HxxmkqkvoDHerkU_vqmO0cs9jvFjPEqG3Fg=s900-c-k-c0x00ffffff-no-rj", // Replace with Codetech IT Solutions logo or relevant image
  role: "MERN Stack Developer Intern",
  company: "Codetech IT Solutions",
  date: "Jun 2025 - Jul 2025",
  desc: "Developed full-stack web applications using the MERN stack, collaborated on real-time projects, and integrated RESTful APIs to build dynamic and responsive user interfaces.",
  skills: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "REST APIs",
    "JavaScript",
    "Git",
    "Postman"
  ],
  doc: "https://drive.google.com/file/d/1vYEp5D-MUAU6JTHW6nQHuvjoVppJ4khF/view?usp=sharing" 
},
];

export const education = [
  {
    id: 0,
    img: "https://images.shiksha.com/mediadata/images/1652957451phpTc4nIn.jpeg",
    school: "Vignan's Institute of Information Technology, Visa",
    date: "Nov 2022 - Aug 2026",
    grade: "9.18 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Information Technology at Vignan's Institute of Information Technology, Visakhapatnam. I have completed 3 semisters and have a CGPA of 9.18. I have taken courses in Data Structures Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. ",
    degree: "Bachelor of Technology - BTech, Information Technology",
  },
  {
    id: 1,
    img: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/f5c3375df2dceaeb432aac100fa95641",
    school: "Sri Chaitanya Junior College, Visakhapatnam",
    date: "Apr 2020 - Apr 2022",
    grade: "91.9%",
    desc: "I completed my class 12 high school education at Sri Chaitanya Junior College, where I scored 91.9% in the board exams.",
    degree: "Board of Intermediate Education, Andhra Pradesh – MPC Stream",
  },
  {
    id: 2,
    img: avmLogo,
    school: "AVM EM School, Visakhapatnam",
    date: "Apr 2014 - Apr 2020",
    grade: "97.3%",
    desc: "I completed my class 10 education at AVM School, Visakhapatnam. I achieved a score of 97.3% in my SSC board exams.",
    degree: "Secondary School Certificate (SSC), Andhra Pradesh",
  },
];

export const projects = [
  {
    id: 9,
    title: "AI Summarise Chrome Extension",
    date: "Mar 2025 - Apr 2025",
    description:
      "AI Summarise Chrome Extension is a productivity tool designed to help users quickly grasp the key insights from any web content. With just a single click, it uses advanced AI to generate concise and accurate summaries of articles, blogs, research papers, or lengthy documents. The extension ensures users save time, avoid information overload, and stay focused on what really matters. Built with React and powered by intelligent algorithms, it delivers clean, user-friendly interactions right within the browser. This makes it an essential tool for students, professionals, and avid readers who want to enhance their online reading efficiency.",
    image:
      chrpic,
    tags: [
     "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Manifest v3",
    "Chrome Extension APIs",
    "Axios",
    "OpenAI API",
   "Bootstrap"
    ],
    category: "web app",
    github: "https://github.com/Hackersaikiran/Chrome_extension",
   
  },
  {
    id: 0,
    title: "AI-ToolHub",
    date: "Dec 2024 - Jun 2025",
    description:
      "AI Tool Hub is your one-stop destination for discovering and exploring AI tools. Built during Sus Hacks 2024, this platform helps users navigate through various AI solutions by matching their specific needs with the right tools.Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    image:
     Apic,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Tailwind CSS",],
    category: "web app",
    github: "https://github.com/Hackersaikiran/Ai-ToolHub",
    webapp: "",
    member: [
      {
        name: "E.Saikiran",
        img: "",
        linkedin: "",
        github: "https://github.com/Hackersaikiran/",
      },
      {
        name: "G.Jathin",
        img: "",
        linkedin: "",
        github: "https://github.com/Jathin321/",
      },
      {
        name: "CH.Yugandhar",
        img: "",
        linkedin: "",
        github: "https://github.com//",
      },
      {
        name: "K.Bangarraju",
        img: "",
        linkedin: "",
        github: "https://github.com//",
      },
    
    ],
  },
  {
    id: 9,
    title: "Real-Time Chat Application",
    date: "Jun 2025 - July 2025",
    description:
      "Realtime ChatApp is a modern web application designed to enable seamless and instant communication between users. It provides a fast, secure, and responsive platform where individuals or groups can exchange messages in real time. With an intuitive user interface, users can easily connect, share information, and collaborate without delays. The app is ideal for both casual conversations and professional team interactions, offering a smooth and engaging chat experience.",
    image:
      Cpic,
    tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Nodejs",
    "Expressjs",
    "MongoDB",
    "Socket.io",
    "JWT",
    "Bootstrap"
    ],
    category: "web app",
    github: "https://github.com/Hackersaikiran/Real-time-Chat-app",
   
  },
  {
    id: 9,
    title: "Find the Product",
    date: "Apr 2024 - Jun 2024",
    description:
      "Find the Product is a smart web application built to simplify the product discovery process for users. It helps users efficiently search and compare items across various categories and stores, saving both time and effort. With a clean and responsive user interface, users can explore products, view detailed information, and make informed purchasing decisions. The platform is ideal for both casual shoppers and tech-savvy users looking for an optimized shopping experience.",
    image:
      FTPpic,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Nodejs",
      "MongoDB",
      "Expressjs",
      "Bootstrap",
    ],
    category: "web app",
    github: "https://github.com/Hackersaikiran/Find-the-product",
   
  },
  
  {
    id: 9,
    title: "Weather App",
    date: "Mar 2025 - Apr 2025",
    description:
      "Weather App is a user-friendly application that provides real-time weather updates for any location worldwide. It displays essential details such as temperature, humidity, wind speed, and weather conditions in an intuitive interface. With features like location search and responsive design, users can quickly check forecasts on both desktop and mobile devices. This app is perfect for anyone who wants quick and accurate weather insights before planning their day.",
    image:
      Wpic,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "OpenWeather API"
    ],
    category: "web app",
    github: "https://github.com/Hackersaikiran/weather_app",
   
  },
  {
    id: 9,
    title: "Doomscrolling Reduction App",
    date: "Jun 2025 - NA",
    description:
      "coming soon...",
    image:
     dPic,
    tags: [
    
    ],
    category: "android app",
    github: "https://github.com/Hackersaikiran/Hackersaikiran.github.io",
   
  },
  
];

export const TimeLineData = [
  { year: 2022, text: "Started my journey" },
  { year: 2023, text: "Started exploring web development and programming" },
  { year: 2024, text: "Gained knowledge in MERN stack and c++ language" },
  { year: 2025, text: "Started building projects" },
];

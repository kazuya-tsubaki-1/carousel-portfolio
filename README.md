# Carousel Portfolio
A simple portfolio creation library using Next(SSG)+Carousel.

# Demo
http://camellia1.html.xdomain.jp/

# Features
- Create a portfolio site by simply changing the JSON content and images.
- The background can be changed by reflecting the contents of Vanta.js in the code.
- Responsive support

# Usage
### setup
```
git clone https://github.com/kazuya-tsubaki-1/carousel-portfolio.git
cd {directory}
yarn
```

### development
```
yarn dev
```

### build
```
yarn build
```

### settings
- site settings  
Please edit the comment part in the code.
```
src/pages/_app.tsx
```

- page settings  
Please edit the comment part in the code.
```
src/pages/index.tsx
```

- vanta settings  
Please edit the comment part in the code.
```
src/components/vanta.tsx
```

- img settings  
Please store the image in the following folder.
```
public/images
```

# Requirement
- node v16.13.2

# Libraries
- next.js
- react-slick
- vanta
- tailwindcss
- typescript
- yarn

# Author
Kazuya Tsubaki  
tsu0baki@gmail.com
 
# License
Carousel Portfolio is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

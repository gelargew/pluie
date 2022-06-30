<h1 id="construe" align="center"> PLUIE </h1>
<p align-"center">it might do some forecasting</p>
</br>
check it live at [plue.gelar.dev](https://pluie.gelar.dev/)

</br>

### How to run locally

- clone the repo `git clone https://github.com/gelargew/pluie.git`
- create a file called .env.local in the root directory
- add your [open weather api][https://openweathermap.org/] inside .env.local
```
OPEN_WEATHER_API_KEY={your_api_key}
```
- run the server
```
yarn install
yarn dev
```
or
```
npm install
npm run dev
```
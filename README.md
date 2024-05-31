## ReactJS Basic Boilerplate

In this Reactjs Basic Boilerplate **Atomic Design Pattern** is used for keeping things clean and breaking large code into small chunks.

### Packages Installed

- Axios
- dayjs
- Nookies
- SASS

### Configurations

i have did basic configurations and folder structure setup, which is ready to use:

#### Axios

For Axios check file `src/@config/axios`.
Two Instances created

- `Private Instance`: Required Token for api call (Authenticated User).
- `Public Instance`: Public API Call no token required.

#### Routes Setup

You can find Routes at `src/routes`.
I have divided routes into sub-files to keep code clean and easily accessible.

`src/routes/index.jsx` is the main routes file where other routes extends.

Right Now, 3 Routes files available:

- Admin Routes
- Auth Routes
- Home Routes

Feel free to do changes accordingly and you can easily access them in browser.

#### SASS/SCSS

You will find the `src/styles` folder. where all the styles are placed. `src/styles/main.scss` is the main file where all files are extended.

`src/styles` folder also uses **Atomic Design Pattern** to name folder and seperate files.

#### Components

Like `src/styles` folder `src/components` folder uses same **Atomic Design Pattern** to name folders and seperate files to keep consistancy.

#### Guards

Right Now, only **Auth Guard** is used this Boilerplate. You can access this guard at `src/@guards/auth-guard.jsx`.

### Utilitis / Helpers

Utilities & Helpers are defined in the `src/@utils` folder.

### Hooks

All the custom hooks are defined in the `src/@hooks` folder

### Layouts

There might be different Layouts for Frontend, Sigin Pages, & Admin Pages. Layouts are defined in the `src/layouts` folder.

### Pages

Pages folder is dedicated to pages used for creating routes. Pages can be access at `src/pages` folder.

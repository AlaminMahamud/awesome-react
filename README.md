# Awesome REACT
  Awesome React examples.

## Getting Started

  These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
  1. nodejs and npm

  Install node and npm
  ```bash
  echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.zshrc
  . ~/.zshrc
  mkdir ~/local
  mkdir ~/node-latest-install
  cd ~/node-latest-install
  curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
  ./configure --prefix=~/local
  make install # ok, fine, this step probably takes more than 30 seconds...
  curl https://www.npmjs.org/install.sh | sh
  ```

  check whether node and npm is correctly installed.
  ```bash
  node -v
  npm -v
  ```

### Installing

  1. First Time Project Setup
    use `create-react-app`.
    ```bash
    sudo npm i -g create-react-app
    PROJECT_NAME='hello-world'
    create-react-app $PROJECT_NAME
    cd $PROJECT_NAME
    npm start
    ```

  2. After Cloning: Install the npm requirements
  ```bash
  npm install
  npm start
  ```


## Deployment

  Add additional notes about how to deploy this on a live system

## Built With

  * [unittest](https://docs.python.org/3/library/unittest.html) - builtins `unittest` framework is used.

## Contributing

  Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

  We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

  * **Alamin Mahamud** - *Initial work* - [alamin.rocks](https://alamin-rocks.herokuapp.com)

  See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

  This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

  * Hat tip to anyone whose code was used

pipeline {

   // agent any

    agent {
        docker {
             'cypress/browsers:node16.5.0-chrome94-ff93'
           // args '-u root:root'
        }
    }
    // agent {
    //     docker {
    //         image 'cypress/browsers:node16.5.0-chrome94-ff93'
    //         args '-u root:root'
    //     }
    // }
    // agent {
    //     docker {
    //         image 'cypress/browsers:node16.5.0-chrome94-ff93'
    //     }
    // }
    // parameters {
    //     string(name:'SPEC', defaultValue:"cypress/integration/**/**",description:"Enter the script"),
    //     choice(name:"BROWSER", choices:['chrome','edge','firefox'],description:"Enter the description")
    // }
    stages {
        //  stage('Download') {
        //     steps {
        //         sh 'https://github.com/GregerGreger/appReact2.git'
        //  }
        stage('Download') {
            steps {
                echo 'Hello'
                //bat 'npm install'
         }
    }   
        // stage('Download step') {
        //     steps {
        //         sh '$(npm bin)/cypress verify'
        //     }
        // } 
        // stage('Download step') {
        //     steps {
        //         bat 'docker-compose -f  docker-compose.yml up'
        //     }
        // }
    }
}

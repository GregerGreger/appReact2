pipeline {
    agent {
        docker {
            image 'cypress/browsers:node16.5.0-chrome94-ff93'
            args '-u root:root'
        }
    }
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
        stage('Download') {
            steps {
                bat 'npm install'
         }
    }   
        // stage('Download step') {
        //     steps {
        //         sh '$(npm bin)/cypress verify'
        //     }
        // } 
        stage('Download step') {
            steps {
                bat 'docker-compose -f  docker-compose.yml up'
            }
        }
    }
}

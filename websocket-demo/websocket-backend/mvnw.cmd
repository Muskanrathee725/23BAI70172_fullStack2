@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script
@REM ----------------------------------------------------------------------------
@IF "%__MVNW_ARG0_NAME__%"=="" (SET "__MVNW_ARG0_NAME__=%~nx0")
@SET __ MVNW_CMD__=
@SET "__MVNW_ERROR__="
@SET "__MVNW_MAVEN_ERROR__="

@SETLOCAL

@SET DIRNAME=%~dp0
@IF "%DIRNAME%"=="" SET DIRNAME=.
@SET MAVEN_PROJECTBASEDIR=%DIRNAME%

@SET MVNW_REPOURL=https://repo.maven.apache.org/maven2
@SET MVNW_DISTRIBUTION_URL_FROM_CONF=
@SET WRAPPER_PROPERTIES=%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.properties

@FOR /F "usebackq tokens=1,2 delims==" %%a IN ("%WRAPPER_PROPERTIES%") DO (
  @IF "%%a"=="distributionUrl" SET "DISTRIBUTION_URL=%%b"
)

@FOR /F "delims=" %%i IN ('echo %DISTRIBUTION_URL%') DO SET DISTRIBUTION_URL=%%i

@SET "DISTRIBUTION_FILE_NAME="
@FOR %%F IN ("%DISTRIBUTION_URL%") DO SET "DISTRIBUTION_FILE_NAME=%%~nxF"

@SET "MAVEN_USER_HOME=%USERPROFILE%\.m2"
@SET "MAVEN_WRAPPER_DIR=%MAVEN_USER_HOME%\wrapper\dists"
@SET "DISTRIBUTION_ID=%DISTRIBUTION_FILE_NAME:.zip=%"
@SET "MAVEN_HOME=%MAVEN_WRAPPER_DIR%\%DISTRIBUTION_ID%\%DISTRIBUTION_ID%"

@IF NOT EXIST "%MAVEN_HOME%\bin\mvn.cmd" (
  @ECHO Downloading Maven %DISTRIBUTION_ID%...
  @ECHO From: %DISTRIBUTION_URL%

  @IF NOT EXIST "%MAVEN_WRAPPER_DIR%\%DISTRIBUTION_ID%" (
    @MKDIR "%MAVEN_WRAPPER_DIR%\%DISTRIBUTION_ID%"
  )

  @SET "ZIP_FILE=%MAVEN_WRAPPER_DIR%\%DISTRIBUTION_ID%\%DISTRIBUTION_FILE_NAME%"

  @powershell -Command "& {Invoke-WebRequest -Uri '%DISTRIBUTION_URL%' -OutFile '%MAVEN_WRAPPER_DIR%\%DISTRIBUTION_ID%\%DISTRIBUTION_FILE_NAME%'}"

  @IF ERRORLEVEL 1 (
    @ECHO Failed to download Maven. Check your internet connection.
    @EXIT /B 1
  )

  @powershell -Command "& {Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::ExtractToDirectory('%MAVEN_WRAPPER_DIR%\%DISTRIBUTION_ID%\%DISTRIBUTION_FILE_NAME%', '%MAVEN_WRAPPER_DIR%\%DISTRIBUTION_ID%')}"
  @ECHO Maven downloaded successfully.
)

@SET "JAVA_HOME_VAR=%JAVA_HOME%"
@IF NOT "%JAVA_HOME_VAR%"=="" (
  @SET "JAVA_CMD=%JAVA_HOME_VAR%\bin\java.exe"
) ELSE (
  @SET "JAVA_CMD=java"
)

@"%MAVEN_HOME%\bin\mvn.cmd" %*

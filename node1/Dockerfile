FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install nodejs -y
COPY . /opt/node-app/
# Çalışma klasörü seçmek için aşağıdaki kod kullanılır
WORKDIR /opt/node-app/
# ENV kullanmak istersen bu şekilde kullanılır ve uygulama içinden process.env.channel şeklinde ulaşabilirsin
ENV channel=I_am_enviroment_variable
# Buraya kadar olan kısım image için gereken kısım aşağıdaki kısım ise container oluşturulurken çalışması gereken kısım
# CMD ["node","/opt/node-app/index.js"];
CMD ["node","index.js"];
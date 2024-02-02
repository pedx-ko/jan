npm install hnswlib-node@1.4.2 --force
cd node_modules/hnswlib-node
node-gyp clean
node-gyp configure --verbose --arch=arm64
node-gyp build --arch=x86_64
cp -r build build_arm64
../../../../.github/scripts/auto-sign.sh
node-gyp clean
node-gyp configure --verbose --arch=x86_64
node-gyp build --arch=arm64
cp -r build build_x86_64
../../../../.github/scripts/auto-sign.sh
rm build/Release/addon.node
rm build/Release/obj.target/addon/src/addon.o
lipo -create build_x86_64/Release/obj.target/addon/src/addon.o build_arm64/Release/obj.target/addon/src/addon.o -output build/Release/obj.target/addon/src/addon.o
lipo -create build_x86_64/Release/addon.node build_arm64/Release/addon.node -output build/Release/addon.node
rm -rf build_x86_64
rm -rf build_arm64
../../../../.github/scripts/auto-sign.sh

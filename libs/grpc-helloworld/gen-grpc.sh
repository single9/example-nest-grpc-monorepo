#! /bin/bash
# Copycat from https://github.com/jnst/x-nestjs-grpc/blob/master/tools/gen.sh

CURRENT_DIR="$( dirname -- "${BASH_SOURCE[0]}" )"
SRC_DIR="${CURRENT_DIR}/../../protos"
DEST_DIR="${CURRENT_DIR}/src/grpc"

if [ ! -d "${DEST_DIR}" ]; then
  mkdir -p "${DEST_DIR}"
fi

node_modules/.bin/pbjs \
--target static-module \
--wrap commonjs \
--keep-case \
--path "${SRC_DIR}" \
--out "${DEST_DIR}/rpc.js" \
"${SRC_DIR}/**/*.proto"

node_modules/.bin/pbts \
--out "${DEST_DIR}/rpc.d.ts" \
"${DEST_DIR}/rpc.js"

import * as anchor from "@project-serum/anchor";
import { AnchorError, Program } from "@project-serum/anchor";
import splToken from "@solana/spl-token";
import { DeclareId } from "../target/types/declare_id";

import { assert } from "chai";

describe("declare_id", () => {
  anchor.setProvider(anchor.Provider.local());
  const program = anchor.workspace.DeclareId as Program<DeclareId>;

  it("throws error!", async () => {
    try {
      await program.rpc.initialize();
      assert.ok(false);
    } catch (_err) {
      assert.ok(_err instanceof AnchorError);
      const err: AnchorError = _err;
      assert.equal(err.error.errorCode.number, 4100);
    }
  });
});

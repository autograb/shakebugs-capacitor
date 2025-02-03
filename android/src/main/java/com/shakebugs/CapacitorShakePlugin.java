package com.shakebugs;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorShake")
public class CapacitorShakePlugin extends Plugin {

    private final CapacitorShake implementation = new CapacitorShake();

    public static final String ERROR_APIKEY_MISSING = "ApiKey must be provided.";
    public static final String ERROR_USER_ID_MISSING = "User Id must be provided.";

    @PluginMethod
    public void start(PluginCall call) {
        String apiKey = call.getString("apiKey");

        if(apiKey == null)
        {
            throw new RuntimeException(ERROR_APIKEY_MISSING);
        }

        implementation.start(this.getActivity(), apiKey);
        call.resolve();
    }

    @PluginMethod
    public void show(PluginCall call) {
        implementation.show();
        call.resolve();
    }

    @PluginMethod
    public void registerUser(PluginCall call) {
        String userId = call.getString("userId");

        if(userId == null)
        {
            throw new RuntimeException(ERROR_USER_ID_MISSING);
        }

        implementation.registerUser(userId);
        call.resolve();
    }
}

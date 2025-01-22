package com.autograb.app;

import android.app.Activity;

import com.shakebugs.shake.Shake;

public class CapacitorShake {
    public void start(Activity activity, String apiKey) {
        Shake.setCrashReportingEnabled(true);
        Shake.start(activity, apiKey);
        return;
    }

    public void show() {
        Shake.show();
        return;
    }

    public void registerUser(String apiKey) {
        Shake.registerUser(apiKey);
        return;
    }
}

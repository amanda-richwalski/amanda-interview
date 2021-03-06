<?php
$I = new ApiTester($scenario);
$I ->wantTo('create a user via API');
$I ->amHTTPAuthenticated('service_user', '123456');
$I ->haveHttpHeader('Content-Type', 'application/x-www-form-urlencoded');
$I ->sendPOST('users', ['name' => 'panda', 'email' => 'panda@panda.com']);
$I ->seeResponseCodeIs(200);
$I ->seeResponseIsJson();
$I ->seeResponseContains('{"result:"ok"}');
?>
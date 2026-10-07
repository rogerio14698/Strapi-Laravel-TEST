<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        Http::fake([
            '*/api/page*' => Http::response([
                'data' => [
                    'title' => 'Inicio',
                    'slug' => 'inicio',
                    'content' => [],
                ],
            ]),
        ]);

        $response = $this->get('/');

        $response->assertOk()->assertSee('Inicio');
    }
}

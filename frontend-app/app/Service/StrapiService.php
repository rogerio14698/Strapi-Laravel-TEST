<?php

namespace App\Service;

use Illuminate\Support\Facades\Http;

class StrapiService
{
    protected string $baseUrl;

    public function __construct()
    {
        $this->baseUrl = rtrim(config('services.strapi.url', 'http://localhost:1337'), '/');
    }

    public function getPage(): ?array
    {
        $request = Http::acceptJson();
        $token = config('services.strapi.token');

        if ($token) {
            $request = $request->withToken($token);
        }

        $response = $request->get("{$this->baseUrl}/api/page", [
            'populate' => '*',
        ])->throw();

        $page = $response->json('data');

        return is_array($page) ? $page : null;
    }
}
